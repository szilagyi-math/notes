import { getOutputFilename as fn } from './utils';

import type { SubjectData } from 'common/types';

export function createBookCompilationScript(subject: SubjectData) {
  if (!subject.book) {
    return null;
  }

  const docsDir = 'latex-docs';

  const script = `echo "Now compiling book in ${subject.dir}"

cd $CWD/content/${subject.dir}/${subject.book.dir}

latexmk -r $CWD/.latexmkrc.prod ${subject.book.source}
  
cp ${subject.buildDir}/${fn(
    subject.book.source,
  )} $CWD/${docsDir}/${subject.book.target}.pdf
`;

  return script;
}
