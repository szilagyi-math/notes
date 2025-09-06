import { getOutputFilename as fn } from './utils';

import type { SubjectData } from 'common/types';

export function createPracticeCompilationScript(subject: SubjectData) {
  if (!subject.practiceMaterial || !subject.practiceMaterial.files.length) {
    return null;
  }

  const script = `echo "Now compiling practice material in ${subject.dir}"

cd ${subject.absoluteDir}/${subject.practiceMaterial.dir}
  
${subject.practiceMaterial.files
  .map(file => {
    if (file.displayName && file.source && file.target) {
      return `latexmk -r ${subject.rcFile} ${file.source}
    
cp ${subject.buildDir}/${fn(
        file.source,
      )} ${subject.absoluteTargetDir}/${file.target}.pdf`;
    } else {
      return `echo 'Skipping ${file.description}'`;
    }
  })
  .join('\n\n')}
`;

  return script;
}
