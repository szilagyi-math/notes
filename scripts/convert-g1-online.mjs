import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, dirname, join } from 'node:path';

const ROOT = process.cwd();
const BOOK = join(ROOT, 'content', 'G1', 'book');
const NOTES = join(ROOT, 'content', 'G1', 'notes');
const CHAPTERS = [
  '03-sequences',
  '04-series',
  '05-functions',
  '06-derivatives',
  '07-integrals',
];

const files = {
  '03-sequences': [
    '00-title.tex',
    '01-concepts.tex',
    '02-special-limits.tex',
    '03-questions.tex',
  ],
  '04-series': ['00-title.tex', '01-concepts.tex', '02-questions.tex'],
  '05-functions': [
    '00-title.tex',
    '01-introduction.tex',
    '02-limits.tex',
    '03-continuity.tex',
    '04-questions.tex',
  ],
  '06-derivatives': [
    '00-title.tex',
    '01-introduction.tex',
    '02-notable-functions.tex',
    '03-meanvalues.tex',
    '04-function-analisys.tex',
    '05-questions.tex',
  ],
  '07-integrals': [
    '00-title.tex',
    '01-indefinite.tex',
    '02-table.tex',
    '03-techniques.tex',
    '04-definite.tex',
    '05-questions.tex',
  ],
};

const chapterDescriptions = {
  '03-sequences': 'Numerikus sorozatok és határértékeik',
  '04-series': 'Numerikus sorok és konvergenciájuk',
  '05-functions': 'Valós függvények, határérték és folytonosság',
  '06-derivatives': 'A differenciálszámítás alapjai és alkalmazásai',
  '07-integrals': 'A határozatlan és határozott integrál',
};

const counters = new Map();

function chapterNumber(chapter) {
  return Number(chapter.slice(0, 2));
}

function nextCounter(chapter, kind) {
  const key = `${chapter}:${kind}`;
  const value = (counters.get(key) ?? 0) + 1;
  counters.set(key, value);
  return value;
}

function escapeAttribute(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('\n', ' ')
    .trim();
}

function encode(value) {
  return Buffer.from(value).toString('base64url');
}

function markerOpen(tag, attributes = '') {
  return `\n\nCODEXOPEN${tag}TOKEN${encode(attributes)}\n\n`;
}

function markerClose(tag) {
  return `\n\nCODEXCLOSE${tag}\n\n`;
}

function removeComments(source) {
  return source
    .split('\n')
    .map(line => {
      let escaped = false;
      for (let i = 0; i < line.length; i++) {
        if (line[i] === '%' && !escaped) return line.slice(0, i);
        escaped = line[i] === '\\' ? !escaped : false;
      }
      return line;
    })
    .join('\n');
}

function removeBalancedEnvironment(source, env, replacement) {
  const token = new RegExp(`\\\\(begin|end)\\{${env}\\}(?:\\[[\\s\\S]*?\\])?`, 'g');
  const matches = [...source.matchAll(token)];
  const stack = [];
  const spans = [];

  for (const match of matches) {
    if (match[1] === 'begin') stack.push(match);
    else if (stack.length) {
      const start = stack.pop();
      if (stack.length === 0) {
        spans.push([start.index, match.index + match[0].length]);
      }
    }
  }

  for (const [start, end] of spans.reverse()) {
    source = source.slice(0, start) + replacement + source.slice(end);
  }
  return source;
}

function replaceSemanticEnvironments(source, chapter) {
  const stack = [];
  const chapterNo = chapterNumber(chapter);
  const pattern = /\\(begin|end)\{(definition|theorem|proof|note|example|statement|blueBox|learnMore|mdframed|questions)\}(?:\[([\s\S]*?)\])?/g;

  return source.replace(pattern, (full, direction, env, option = '') => {
    if (direction === 'begin') {
      let tag;
      let attributes = '';
      const title = option.trim();

      if (env === 'definition') {
        tag = 'Definition';
        attributes = ` id="definition.${chapterNo}.${nextCounter(chapter, 'definition')}"`;
        if (title) attributes += ` title="${escapeAttribute(title)}"`;
      } else if (env === 'theorem') {
        tag = 'Theorem';
        attributes = ` id="theorem.${chapterNo}.${nextCounter(chapter, 'theorem')}"`;
        if (title) attributes += ` title="${escapeAttribute(title)}"`;
      } else if (env === 'proof') {
        tag = 'Proof';
        if (title) attributes = ` title="${escapeAttribute(title)}"`;
      } else if (env === 'note') tag = 'Note';
      else if (env === 'example') tag = 'Example';
      else if (env === 'statement') tag = 'Statement';
      else if (env === 'blueBox') tag = 'BlueBox';
      else if (env === 'learnMore') {
        tag = 'BlueBox';
        if (title) attributes = ` data-title="${escapeAttribute(title)}"`;
      } else if (env === 'mdframed') {
        tag = /style\s*=\s*statement/.test(title) ? 'Statement' : 'Example';
      } else if (env === 'questions') tag = null;

      stack.push(tag);
      if (!tag) return '\n\n';

      const heading = env === 'learnMore' && title ? `\n\n\\textbf{${title}}\n\n` : '';
      return markerOpen(tag, attributes) + heading;
    }

    const tag = stack.pop();
    return tag ? markerClose(tag) : '\n\n';
  });
}

function titleFrom(source, file) {
  if (file.endsWith('questions.tex')) return 'Felkészülést segítő kérdések';
  const chapterTitle = source.match(/\\mainChapter\{([^}]+)\}/)?.[1];
  if (chapterTitle) return chapterTitle;
  return source.match(/\\section\{([^}]+)\}/)?.[1] ?? basename(file, '.tex');
}

function preprocess(source, chapter, file) {
  const isTitle = file === '00-title.tex';
  source = removeComments(source);

  source = removeBalancedEnvironment(
    source,
    'tikzpicture',
    isTitle ? '\n' : '\n\\begin{quote}\\textit{Az ábra a nyomtatható jegyzetben tekinthető meg.}\\end{quote}\n',
  );

  source = replaceSemanticEnvironments(source, chapter);

  source = source
    .replace(/\\mainChapter\{[^}]+\}/g, '')
    .replace(/\\section\*?\{[^}]+\}(?:\\label\{[^}]+\})?/g, '')
    .replace(/\\label\{[^}]+\}/g, '')
    .replace(/\\begin\{(?:center|minipage)\}(?:\{[^}]*\})?/g, '')
    .replace(/\\end\{(?:center|minipage)\}/g, '')
    .replace(/\\(?:clearpage|newpage|vfill|chaptertoc|bgroup|egroup|sffamily|centering)\b/g, '')
    .replace(/\\color\{[^}]+\}/g, '')
    .replace(/\\hfill\b/g, ' ')
    .replace(/\\vspace\*?\{[^}]+\}/g, '')
    .replace(/\\hspace\*?\{[^}]+\}/g, '')
    .replace(/\\parbox\{[^}]+\}\{[^\n]*\\contentsline[^\n]*\}\\par/g, '')
    .replace(/\\contentsline[^\n]*/g, '')
    .replace(/\\sftitle\{([^}]+)\}/g, '\\subsection*{$1}')
    .replace(/\\newcommand\{?\\(?:cs|dint|dmint|fr)\}?[^\n]*/g, '')
    .replace(/\\newenvironment\{intTabular\}[\s\S]*?\n\s*\}/g, '')
    .replace(/\\begin\{intTabular\}/g, '\\begin{tabular}{cc}')
    .replace(/\\end\{intTabular\}/g, '\\end{tabular}')
    .replace(/\\(?:cs|fr)\b/g, '')
    .replace(/\\d?mint\b/g, '\\int')
    .replace(/\\dint\b/g, '\\int')
    .replace(/\\def\\arraystretch\{[^}]+\}/g, '')
    .replace(/\\def\\arraycolsep\{[^}]+\}/g, '')
    .replace(/\\setlength[^\n]*/g, '')
    .replace(/\\renewcommand[^\n]*/g, '')
    .replace(/\\begin\{(?:scope|pgfonlayer)\}(?:\{[^}]+\})?/g, '')
    .replace(/\\end\{(?:scope|pgfonlayer)\}/g, '')
    .replace(/\n{3,}/g, '\n\n');

  return source.trim() + '\n';
}

function postprocess(markdown) {
  markdown = markdown
    .replace(/^[ \t]*``` math[ \t]*\n([\s\S]*?)^[ \t]*```[ \t]*$/gm, (_, math) => `$$\n${math.trim()}\n$$`)
    .replace(/\$`([\s\S]*?)`\$/g, (_, math) => `$${math.replaceAll('\n', ' ').trim()}$`)
    .replace(/\|x\|/g, '\\lvert x \\rvert')
    .replace(/^\{\d+\}\s*$/gm, '')
    .replace(/\\sfrac/g, '\\frac')
    .replace(/\\underbracket/g, '\\underbrace')
    .replace(/\\\<br\\\>/g, '<br />')
    .replace(/\\\</g, '<')
    .replace(/\\\>/g, '>');

  markdown = markdown.replace(
    /CODEXOPEN([A-Za-z]+)TOKEN([A-Za-z0-9_-]*)/g,
    (_, tag, payload) => {
      const attributes = Buffer.from(payload, 'base64url').toString();
      return `<${tag}${attributes}>`;
    },
  );
  markdown = markdown.replace(/CODEXCLOSE([A-Za-z]+)/g, '</$1>');

  return markdown
    .replace(/^<([A-Za-z]+)([^>]*)>\s+/gm, '<$1$2>\n\n')
    .replace(/\s+<\/([A-Za-z]+)>$/gm, '\n\n</$1>')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function integralReferenceBody() {
  return `<BlueBox>

$$
  \\int f(x) \\dd x = F(x) + C
$$

| $f(x)$ | $F(x)$ |
|---|---|
| $k$ | $kx$ |
| $x^{\\alpha}$ | $\\dfrac{x^{\\alpha+1}}{\\alpha+1}$, $\\alpha \\ne -1$ |
| $\\dfrac{1}{x}$ | $\\ln|x|$ |
| $e^x$ | $e^x$ |
| $a^x$ | $\\dfrac{a^x}{\\ln a}$ |
| $\\sin x$ | $-\\cos x$ |
| $\\cos x$ | $\\sin x$ |
| $\\dfrac{1}{\\cos^2x}$ | $\\tan x$ |
| $\\dfrac{1}{\\sin^2x}$ | $-\\cot x$ |
| $\\dfrac{1}{\\sqrt{1-x^2}}$ | $\\arcsin x$ |
| $-\\dfrac{1}{\\sqrt{1-x^2}}$ | $\\arccos x$ |
| $\\dfrac{1}{1+x^2}$ | $\\arctan x$ |
| $-\\dfrac{1}{1+x^2}$ | $\\arccot x$ |
| $\\sinh x$ | $\\cosh x$ |
| $\\cosh x$ | $\\sinh x$ |
| $\\dfrac{1}{\\cosh^2x}$ | $\\tanh x$ |
| $\\dfrac{1}{\\sinh^2x}$ | $-\\coth x$ |
| $\\dfrac{1}{\\sqrt{x^2+1}}$ | $\\arcsinh x$ |
| $\\dfrac{1}{\\sqrt{x^2-1}}$ | $\\arccosh x$ |
| $\\dfrac{1}{1-x^2}$ | $\\arctanh x$ |
| $\\dfrac{1}{1-x^2}$ | $\\arccoth x$ |

## Linearitás

$$
  \\int \\lambda f(x)\\,\\dd x
  = \\lambda \\int f(x)\\,\\dd x
$$

$$
  \\int (f(x) \\pm g(x))\\,\\dd x
  = \\int f(x)\\,\\dd x \\pm \\int g(x)\\,\\dd x
$$

$$
  \\int_a^b f(x)\\,\\dd x
  = \\int_a^c f(x)\\,\\dd x + \\int_c^b f(x)\\,\\dd x
$$

## Parciális integrálás

$$
  \\int u\\,\\dd v = uv - \\int v\\,\\dd u
$$

$$
  \\int f'(x)g(x)\\,\\dd x
  = f(x)g(x)-\\int f(x)g'(x)\\,\\dd x
$$

## Helyettesítéses integrálás

$$
  \\int e^{f(x)}f'(x)\\,\\dd x=e^{f(x)}+C
$$

$$
  \\int \\frac{f'(x)}{f(x)}\\,\\dd x=\\ln|f(x)|+C
$$

$$
  \\int f^\\alpha(x)f'(x)\\,\\dd x
  =\\frac{f^{\\alpha+1}(x)}{\\alpha+1}+C,
  \\qquad \\alpha\\ne-1
$$

$$
  \\int f(g(x))g'(x)\\,\\dd x=F(g(x))+C
$$

</BlueBox>`;
}

function repairBody(body, chapter, file) {
  const diagramPlaceholder = '> *Az ábra a nyomtatható jegyzetben tekinthető meg.*';

  if (chapter === '06-derivatives' && file === '01-introduction.tex') {
    body = body.replace(
      diagramPlaceholder,
      `A függvény és inverze ellentétes irányú megfeleltetést ad ugyanazon két halmaz között:

$$
  I \\xrightarrow{\\;f\\;} J,
  \\qquad
  J \\xrightarrow{\\;f^{-1}\\;} I,
  \\qquad
  f^{-1}(f(x))=x.
$$`,
    );
  }

  if (chapter === '06-derivatives' && file === '02-notable-functions.tex') {
    body = body.replace(
      diagramPlaceholder,
      `Az egységkör $x$ szöghöz tartozó pontja $(\\cos x;\\sin x)$. A tangens és a kotangens az egységkör megfelelő érintőszakaszaival szemléltethető.`,
    );
    body = body.replace(
      diagramPlaceholder,
      `Az egységhiperbola pontjai $(\\cosh x;\\sinh x)$ alakban paraméterezhetők, és teljesítik a $\\cosh^2x-\\sinh^2x=1$ azonosságot.`,
    );
  }

  return body;
}

for (const chapter of CHAPTERS) {
  const targetDir = join(NOTES, chapter);
  mkdirSync(targetDir, { recursive: true });

  for (const file of files[chapter]) {
    const sourcePath = join(BOOK, chapter, file);
    const source = readFileSync(sourcePath, 'utf8');
    const title = titleFrom(source, file);
    const prepared = preprocess(source, chapter, file);
    let body = chapter === '07-integrals' && file === '02-table.tex'
      ? integralReferenceBody()
      : postprocess(
          execFileSync(
            'pandoc',
            ['-f', 'latex', '-t', 'gfm', '--wrap=none'],
            { input: prepared, encoding: 'utf8', maxBuffer: 20 * 1024 * 1024 },
          ),
        );
    body = repairBody(body, chapter, file);
    const description = file === '00-title.tex' ? chapterDescriptions[chapter] : title;
    const noLocalToc = file === '00-title.tex' ? '\nnoLocalToc: true' : '';
    const frontmatter = `---\ntitle: "${title.replaceAll('"', '\\"')}"\ndescription: "${description.replaceAll('"', '\\"')}"${noLocalToc}\n---`;
    const targetPath = join(targetDir, file.replace(/\.tex$/, '.md'));
    writeFileSync(targetPath, `${frontmatter}\n\n${body}\n`);
    console.log(targetPath.slice(ROOT.length + 1));
  }
}
