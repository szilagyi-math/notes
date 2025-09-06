import { getOutputFilename as fn } from './utils';

import type { SubjectData } from 'common/types';

export function createPracticeSolutionsCompilationScript(subject: SubjectData) {
  if (
    !subject.practiceMaterial ||
    !subject.practiceMaterial.files.length ||
    !subject.practiceMaterial.latexSolutionsDir
  ) {
    return null;
  }

  const script = `echo "Now compiling practice solutions in ${subject.dir}"

cd ${subject.absoluteDir}/${subject.practiceMaterial.latexSolutionsDir}
  
${subject.practiceMaterial.files
  .filter(file => file.latexSolutionSource && file.latexSolutionTarget)
  .map(file => {
    if (file.displayName) {
      return `latexmk -r ${subject.rcFile} ${file.latexSolutionSource}

cp ${subject.buildDir}/${fn(
        file.latexSolutionSource!,
      )} ${subject.absoluteTargetDir}/${file.latexSolutionTarget}.pdf`;
    } else {
      return `echo 'Skipping ${file.description}'`;
    }
  })
  .join('\n\n')}
`;

  return script;
}
