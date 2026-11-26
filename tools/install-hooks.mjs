import { execFileSync, spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';

if (!process.env.CI && existsSync('.git')) {
  const current = spawnSync('git', ['config', '--get', 'core.hooksPath'], {
    encoding: 'utf8',
  }).stdout;
  if (!current.trim() || current.trim() === '.githooks') {
    execFileSync('git', ['config', '--local', 'core.hooksPath', '.githooks']);
  } else {
    console.log('Existing hooksPath preserved. Run .githooks/pre-commit from your hook.');
  }
}
