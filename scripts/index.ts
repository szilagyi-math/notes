import { join } from 'path';
import { cwd } from 'process';
import { existsSync, mkdirSync } from 'fs';
import { parseConfig } from './parser';
import { configToBash } from './shell';
import { writeFile } from 'fs/promises';

import type { Subject, SubjectData } from 'common/types';

const CONFIG_NAME = 'config.yml';
const RC_FILE = '.latexmkrc.prod';

const CWD = cwd();
const BASE_DIR = join(CWD, 'content');
const GENERATE_DIR = join(CWD, 'generate');
const TARGET_DIR = join(CWD, 'latex-docs');
const SUBJECT_DIRS: Array<[Subject, string]> = [
  // Add more subjects here
  ['G1', 'G1'],
  ['G2', 'G2'],
  ['G3', 'G3'],
];

const SHEBANG = '#!/bin/bash';

if (!existsSync(GENERATE_DIR)) {
  mkdirSync(GENERATE_DIR, { recursive: true });
}
if (!existsSync(TARGET_DIR)) {
  mkdirSync(TARGET_DIR, { recursive: true });
}

Promise.all(
  SUBJECT_DIRS.map(([s, dir]) => {
    return parseConfig(
      s,
      BASE_DIR,
      dir,
      CONFIG_NAME,
      join(CWD, RC_FILE),
      'build',
      TARGET_DIR,
    );
  }),
)
  .then(arr => {
    const obj = arr.reduce((acc, val) => {
      return {
        ...acc,
        ...val,
      };
    }, {});

    return obj as { [key in Subject]: SubjectData };
  })
  .then(config => {
    const compileScript = configToBash(config);

    return Promise.all([
      writeFile(
        join(GENERATE_DIR, 'compile.sh'),
        [SHEBANG, compileScript].join('\n\n'),
      ),
      writeFile(
        join(GENERATE_DIR, 'config.json'),
        JSON.stringify(config, null, 2),
      ),
      writeFile(
        join(GENERATE_DIR, 'index.ts'),
        `import { Subject, SubjectData } from '../common/types';
import configJSON from './config.json';

const data = configJSON as unknown as { [key in Subject]: SubjectData };

export { data }
`,
      ),
    ]);
  });
