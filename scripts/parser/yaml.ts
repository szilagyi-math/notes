import camelize from 'camelize-ts';

import { stringify, parse } from 'yaml';
import { writeFile, readFile } from 'fs/promises';
import { SubjectData, Subject, Downloads } from 'common/types';
import { join } from 'path';

export async function writeYaml(path: string, content: string) {
  const yaml = stringify(content);

  return writeFile(path, yaml);
}

export async function parseConfig(
  baseDir: string,
  subject: [Subject, string],
  configName: string,
  rcFile: string,
  buildDir: string
) {
  const configFile = await readFile(
    join(baseDir, subject[1], configName),
    'utf-8'
  );
  const json = parse(configFile);
  const config = camelize(json) as any;

  const downloads: Downloads[Subject] = {
    book: {
      displayName: config.book.displayName,
      fileName: `${config.book.target}.pdf`,
    },
    practice: [],
  };

  for (const file of config.practiceMaterial.files) {
    if (file.displayName && file.source && file.target) {
      downloads.practice.push({
        displayName: file.displayName,
        fileName: `${file.target}.pdf`,
      });
    }
  }

  const data = {
    dir: subject[1],
    absoluteDir: join(baseDir, subject[1]),
    rcFile,
    buildDir,
    ...config,
    downloads,
  } as SubjectData;

  return {
    [subject[0]]: data,
  };
}

export type ParsedConfig = Awaited<ReturnType<typeof parseConfig>>;
