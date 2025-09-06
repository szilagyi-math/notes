import { getOutputFilename as fn } from './utils';

import type { SubjectData } from 'common/types';

export function createBookCompilationScript(subject: SubjectData) {
  if (!subject.book) {
    return null;
  }

  const script = `echo "Now compiling book in ${subject.dir}"

cd ${subject.absoluteDir}/${subject.book.dir}

latexmk -r ${subject.rcFile} ${subject.book.source}
  
cp ${subject.buildDir}/${fn(
    subject.book.source,
  )} ${subject.absoluteTargetDir}/${subject.book.target}.pdf
  `;

  return script;
}
