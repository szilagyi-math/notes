import { join } from 'path';
import { cwd } from 'process';
import { writeFile } from 'fs/promises';
import { existsSync, mkdirSync } from 'fs';
import { parseConfig } from './parser';
import { configToBash } from './shell';

const CONFIG_NAME = 'config.yml';
const RC_FILE = '.latexmkrc';

const CWD = cwd();
const BASE_DIR = join(CWD, 'content');
const GENERATE_DIR = join(CWD, 'generate');
const LATEX_DIRS = ['G1-book', 'G1-practises'];

const SHEBANG = '#!/bin/bash';

if (!existsSync(GENERATE_DIR)) {
  mkdirSync(GENERATE_DIR, { recursive: true });
}

Promise.all(
  LATEX_DIRS.map(relativeDir => {
    return parseConfig(
      join(BASE_DIR, relativeDir, CONFIG_NAME),
      CWD,
      RC_FILE,
      BASE_DIR
    );
  })
)
  .then(configs => {
    const scripts = configs.map(configToBash);

    return writeFile(
      join(GENERATE_DIR, 'compile.sh'),
      [SHEBANG, ...scripts].join('\n\n')
    );
  })
  .then(() => {
    console.log('Compilation script written to generate/compile.sh');
  });
