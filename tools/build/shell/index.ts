import { createCompilationScript } from './compile';
import { movePdfSolutions } from './move-pdf-solutions';
import { createPreparationScript } from './prepare';

import type { Subject, SubjectData } from 'common/types';

export function configToBash(mergedConfig: {
  [key in Subject]: SubjectData;
}) {
  const practiceDirs = Object.entries(mergedConfig).flatMap(
    ([
      subject,
      {
        practiceMaterial: { dir, latexSolutionsDir },
      },
    ]) => [
      `content/${subject}/${dir}`,
      ...(latexSolutionsDir ? [`content/${subject}/${latexSolutionsDir}`] : []),
    ],
  );

  const preparationScript = createPreparationScript(...practiceDirs);

  const compilationScript = Object.entries(mergedConfig)
    .map(([, data]) => {
      const compileScript = createCompilationScript(data);
      const moveSolutionsScript = movePdfSolutions(data);

      return moveSolutionsScript
        ? compileScript + '\n\n\n' + moveSolutionsScript
        : compileScript;
    })
    .join('\n\n\n');

  return preparationScript + '\n\n\n' + compilationScript;
}
