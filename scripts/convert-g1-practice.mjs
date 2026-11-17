import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Use the same KaTeX installation as the online notes renderer.
const requireKatex = createRequire(import.meta.resolve('rehype-katex'));
const katex = requireKatex('katex');
const output = process.argv[2] || 'out/static/practice';
const { G1 } = JSON.parse(readFileSync('generate/config.json', 'utf8'));
const mathErrors = new Map();
const rawCommands = new Set();

const macros = {
  '\\Reals': '\\mathbb{R}',
  '\\Naturals': '\\mathbb{N}',
  '\\Integers': '\\mathbb{Z}',
  '\\Rationals': '\\mathbb{Q}',
  '\\Complex': '\\mathbb{C}',
  '\\mathbfit': '\\boldsymbol{#1}',
  '\\symbf': '\\boldsymbol{#1}',
  '\\rvec': '\\boldsymbol{#1}',
  '\\uvec': '\\hat{\\boldsymbol{#1}}',
  '\\nvec': '\\boldsymbol{0}',
  '\\ibase': '\\hat{\\boldsymbol{\\imath}}',
  '\\jbase': '\\hat{\\boldsymbol{\\jmath}}',
  '\\kbase': '\\hat{k}',
  '\\rmat': '\\mathbf{#1}',
  '\\nmat': '\\mathbf{0}',
  '\\imat': '\\mathbb{E}',
  '\\dd': '\\mathop{}\\!\\mathrm{d}',
  '\\iu': '{i\\mkern1mu}',
  '\\Domain': '\\mathcal{D}',
  '\\Range': '\\mathcal{R}',
  '\\abs': '\\left|#1\\right|',
  '\\norma': '\\left\\|#1\\right\\|',
  '\\scalar': '\\left\\langle #1; #2\\right\\rangle',
  '\\odv': '\\frac{\\mathrm{d}#1}{\\mathrm{d}#2}',
  '\\sfrac': '\\frac{#1}{#2}',
  '\\dint': '\\displaystyle\\int',
  '\\dmint': '\\displaystyle\\int',
  '\\arccot': '\\operatorname{arccot}',
  '\\arcsinh': '\\operatorname{arcsinh}',
  '\\arccosh': '\\operatorname{arccosh}',
  '\\arctanh': '\\operatorname{arctanh}',
  '\\iRe': '\\operatorname{Re}',
  '\\iIm': '\\operatorname{Im}',
  '\\sgn': '\\operatorname{sgn}',
  '\\card': '\\operatorname{card}',
  '\\Vol': '\\operatorname{vol}',
  '\\T': '\\intercal',
  '\\rcisdeg': '#1\\left(\\cos{#2}^\\circ+\\iu\\sin{#2}^\\circ\\right)',
};

function pandoc(input, from, to) {
  return execFileSync('pandoc', ['--from', from, '--to', to], {
    input,
    encoding: 'utf8',
    maxBuffer: 16 * 1024 * 1024,
  });
}

function removeComments(source) {
  return source.replace(/(?<!\\)%[^\n]*/g, '');
}

function questions(source, starts) {
  const lines = source.split(/\r?\n/);
  return starts.map((start, index) => {
    const fragment = removeComments(
      lines
        .slice(start - 1, starts[index + 1] ? starts[index + 1] - 1 : undefined)
        .join('\n'),
    );
    let depth = 0;
    for (const match of fragment.matchAll(/\\(begin|end)\{enumerate\}/g)) {
      if (match[1] === 'begin') depth++;
      else if (depth-- === 0)
        return fragment.slice(0, match.index).replace(/^\s*\\item\s*/, '');
    }
    return fragment.replace(/^\s*\\item\s*/, '');
  });
}

function solutions(source) {
  return removeComments(source)
    .split(/^\s*\\subsection\{([^}]+)\}/m)
    .slice(1)
    .flatMap((value, index, parts) =>
      index % 2
        ? []
        : [
            `\\subsubsection{${value}}\n${parts[index + 1].split(/\\end\{document\}/)[0]}`,
          ],
    );
}

function prepare(source, id) {
  return source
    .replace(/\\scalebox\{[^}]+\}\{\s*\$([\s\S]*?)\$\s*\}/g, '$1')
    .replaceAll('\\rcisdeg*', '\\rcisdeg')
    .replace(/\\begin\{tikzpicture\}[\s\S]+?\\end\{tikzpicture\}/g, () => {
      if (id !== '9.6 feladat') throw new Error(`Hiányzó webes ábra: ${id}`);
      return '\n\n\\includegraphics{/static/practice/g1-09-06.svg}\n\n';
    })
    .replace(/\\begin\{multicols\}\{\d+\}|\\end\{multicols\}/g, '\n')
    .replace(
      /\\begin\{(?:blueBox|note|statement|example)\}|\\end\{(?:blueBox|note|statement|example)\}/g,
      '\n',
    )
    .replace(/\\(?:begin|end)\{center\}/g, '\n')
    .replace(
      /\\(?:clearpage|newpage|vfill|pagebreak|centering|hfill|noindent|smallskip|medskip|bigskip)\b/g,
      '',
    )
    .replace(/\\(?:hspace|vspace)\*?\{[^}]*\}/g, '')
    .replace(/\\def\\(?:arraystretch|arraycolsep)\{[^}]*\}/g, '')
    .replace(/\\begin\{alignat\*?\}\{\d+\}/g, '\\begin{align*}')
    .replace(/\\end\{alignat\*?\}/g, '\\end{align*}');
}

function convert(source, id) {
  const document = JSON.parse(
    pandoc(prepare(source, id), 'latex+raw_tex', 'json'),
  );

  function transform(value) {
    if (Array.isArray(value)) return value.map(transform);
    if (!value || typeof value !== 'object') return value;
    if (value.t === 'Math') {
      const [type, tex] = value.c;
      try {
        return {
          t: 'RawInline',
          c: [
            'html',
            katex.renderToString(tex, {
              displayMode: type.t === 'DisplayMath',
              macros: { ...macros },
              strict: 'ignore',
            }),
          ],
        };
      } catch (error) {
        const message = error.message;
        const command =
          message.match(/Undefined control sequence: (\\[^ ]+)/)?.[1] ||
          message;
        if (!mathErrors.has(command))
          mathErrors.set(command, `${id}: ${tex.slice(0, 350)}`);
      }
    }
    if (
      ['RawInline', 'RawBlock'].includes(value.t) &&
      ['latex', 'tex'].includes(value.c?.[0])
    ) {
      const tex = value.c[1];
      if (tex === '\\-') return { t: 'Str', c: '\u00ad' };
      if (tex.startsWith('\\boxed{'))
        return transform({ t: 'Math', c: [{ t: 'InlineMath' }, tex] });
      rawCommands.add(`${id}: ${tex.slice(0, 180)}`);
    }
    return Object.fromEntries(
      Object.entries(value).map(([key, child]) => [key, transform(child)]),
    );
  }

  const html = pandoc(JSON.stringify(transform(document)), 'json', 'html5');
  if (!html.trim()) throw new Error(`Üres webes tartalom: ${id}`);
  return html.replaceAll(
    'alt="image"',
    'alt="A kocsma és a ház helyzete a patakhoz képest"',
  );
}

const practice = G1.practiceMaterial;
let count = 0;
for (const row of practice.files) {
  if (!row.exerciseLines?.length) continue;
  const source = readFileSync(
    join('content/G1', practice.dir, row.source),
    'utf8',
  );
  const statements = questions(source, row.exerciseLines);
  const showSolution = [practice.hideSolutions, row.hideSolution].every(
    setting => setting !== 'no-copy' && setting !== 'no-link',
  );
  const answers =
    showSolution && row.latexSolutionSource
      ? solutions(
          readFileSync(
            join(
              'content/G1',
              practice.latexSolutionsDir,
              row.latexSolutionSource,
            ),
            'utf8',
          ),
        )
      : [];
  if (answers.length && answers.length !== statements.length) {
    throw new Error(`${row.target}: a feladatok és megoldások száma eltér`);
  }

  const exercises = statements.map((statement, index) => {
    const id = `${row.week}.${index + 1}`;
    return {
      question: convert(statement, `${id} feladat`),
      ...(answers[index] && {
        solution: convert(answers[index], `${id} megoldás`),
      }),
    };
  });
  const directory = join(output, row.target);
  mkdirSync(directory, { recursive: true });
  writeFileSync(join(directory, 'index.json'), JSON.stringify(exercises));
  count += exercises.length;
}

if (rawCommands.size) console.error('Raw LaTeX:', [...rawCommands]);
if (mathErrors.size || rawCommands.size) {
  console.error([...mathErrors.entries()]);
  process.exitCode = 1;
} else {
  console.log(`Converted ${count} G1 exercises to HTML.`);
}
