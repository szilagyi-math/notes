import { getOutputFilename as fn } from './utils';

import type { SubjectData } from 'common/types';

export function createPracticeCompilationScript(subject: SubjectData) {
  if (!subject.practiceMaterial || !subject.practiceMaterial.files.length) {
    return null;
  }

  const docsDir = 'latex-docs';

  const script = `echo "Now compiling practice material in ${subject.dir}"

cd $CWD/content/${subject.dir}/${subject.practiceMaterial.dir}
  
${subject.practiceMaterial.files
  .map(file => {
    if (file.displayName && file.source && file.target) {
      return `latexmk -r $CWD/.latexmkrc.prod ${file.source}
    
cp ${subject.buildDir}/${fn(file.source)} $CWD/${docsDir}/${file.target}.pdf`;
    } else {
      return `echo 'Skipping ${file.description}'`;
    }
  })
  .join('\n\n')}
`;

  return script;
}
