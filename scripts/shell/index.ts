import { createCompileScript } from './compile';
import { moveSolutions } from './moveSolutions';
import { createPrepareScript } from './prepare';

import type { Subject, SubjectData } from 'common/types';

export function configToBash(mergedConfig: {
  [key in Subject]: SubjectData;
}) {
  const preparationScript = createPrepareScript();

  const compilationScript = Object.entries(mergedConfig)
    .map(([, data]) => {
      const compileScript = createCompileScript(data);
      const moveSolutionsScript = moveSolutions(data);

      return moveSolutionsScript
        ? compileScript + '\n\n\n' + moveSolutionsScript
        : compileScript;
    })
    .join('\n\n\n');

  return preparationScript + '\n\n\n' + compilationScript;
}
