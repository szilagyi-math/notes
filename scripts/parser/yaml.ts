import { stringify, parse } from 'yaml';
import { writeFile, readFile } from 'fs/promises';
import { dirname, relative } from 'path';
import { LatexConfig } from 'scripts/types';

export async function writeYaml(path: string, content: string) {
  const yaml = stringify(content);

  return writeFile(path, yaml);
}

export async function parseConfig(
  path: string,
  cwd: string,
  rcFile: string,
  buildDir: string
) {
  const configFile = await readFile(path, 'utf-8');

  const json: LatexConfig = parse(configFile);

  const absolute_path = dirname(path);
  const relative_path = relative(cwd, absolute_path);

  const relative_rc = relative(absolute_path, rcFile);

  return {
    absolute_path,
    relative_path,
    relative_rc,
    build_dir: buildDir,
    ...json,
  };
}

export type ParsedConfig = Awaited<ReturnType<typeof parseConfig>>;
