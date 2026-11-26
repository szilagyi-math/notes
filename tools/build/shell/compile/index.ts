import type { SubjectData } from 'common/types';
import { createBookCompilationScript } from './compile-book';
import { createPracticeCompilationScript } from './compile-practice';
import { createPracticeSolutionsCompilationScript } from './compile-practice-solutions';

// TODO: Unhardcode the paths as well the .latexmkrc.prod file
export function createCompilationScript(subject: SubjectData) {
  let script = `echo "Now compiling files in ${subject.dir}"`;

  const bookScript = createBookCompilationScript(subject);
  if (bookScript) {
    script += `\n\n${bookScript}`;
  }

  const practiceScript = createPracticeCompilationScript(subject);
  if (practiceScript) {
    script += `\n\n${practiceScript}`;
  }

  const practiceSolutionsScript =
    createPracticeSolutionsCompilationScript(subject);
  if (practiceSolutionsScript) {
    script += `\n\n${practiceSolutionsScript}`;
  }

  script += `\n\necho "Finished compiling files in ${subject.dir}"`;

  return script;
}
