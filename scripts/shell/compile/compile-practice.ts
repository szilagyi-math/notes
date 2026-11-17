import { getOutputFilename as fn } from './utils';

import type { SubjectData } from 'common/types';

export function createPracticeCompilationScript(subject: SubjectData) {
  if (!subject.practiceMaterial || !subject.practiceMaterial.files.length) {
    return null;
  }

  const worksheets = subject.practiceMaterial.files.map(file => {
    if (!file.displayName || !file.source || !file.target) {
      return `echo 'Skipping ${file.description}'`;
    }

    const compile = `latexmk -r "$CWD/.latexmkrc.prod" "${file.source}" &&
cp "${subject.buildDir}/${fn(file.source)}" "$CWD/latex-docs/${file.target}.pdf"`;

    if (!file.exerciseLines?.length) return compile + ' || exit 1';

    // Keep the published PDF path and add named destinations during compilation.
    // The subshell restores the worksheet even if compilation fails.
    const destinations = file.exerciseLines.map(
      (line, index) =>
        String.raw`${line}s/^( *\\item(\[[^]]*\])?)/\1 \\leavevmode\\hypertarget{practice-${index + 1}}{}/`,
    );

    return `(
  source="${file.source}"
  backup=$(mktemp) || exit 1
  cp "$source" "$backup" || exit 1
  trap 'mv "$backup" "$source"' EXIT
  sed -E -f /dev/stdin "$backup" > "$source" <<'PRACTICE_DESTINATIONS' || exit 1
${destinations.join('\n')}
PRACTICE_DESTINATIONS
  ${compile}
) || exit 1`;
  });

  return `echo "Now compiling practice material in ${subject.dir}"
cd "$CWD/content/${subject.dir}/${subject.practiceMaterial.dir}" || exit 1

${worksheets.join('\n\n')}
`;
}
