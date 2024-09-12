import { createCompileScript } from './compile';
import { createPrepareScript } from './prepare';

import type { Subject, SubjectData } from 'common/types';

export function configToBash(mergedConfig: {
  [key in Subject]: SubjectData;
}) {
  const preparationScript = createPrepareScript();

  const compilationScript = Object.entries(mergedConfig)
    .map(([, data]) => {
      return createCompileScript(data);
    })
    .join('\n\n\n');

  return preparationScript + '\n\n\n' + compilationScript;
}
