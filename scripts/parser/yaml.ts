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

  const absolutePath = dirname(path);
  const relativePath = relative(cwd, absolutePath);

  const relativeRc = relative(absolutePath, rcFile);

  const downloads = json.root_files.map(file => {
    return {
      fileName: `${file.target}.pdf`,
      displayName: file.display_name,
    };
  });

  return {
    absolutePath,
    relativePath,
    relativeRc,
    buildDir,
    rootFiles: json.root_files,
    subject: json.subject,
    type: json.type,
    downloads,
  };
}

export type ParsedConfig = Awaited<ReturnType<typeof parseConfig>>;
