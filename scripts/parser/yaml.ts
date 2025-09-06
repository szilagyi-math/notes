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
  subject: Subject,
  baseDir: string,
  subjectDir: string,
  configName: string,
  rcFile: string,
  buildDir: string,
  targetDir: string,
) {
  const configFile = await readFile(
    join(baseDir, subjectDir, configName),
    'utf-8',
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

  const globalSolutionsMode: undefined | false | 'no-copy' | 'no-link' =
    config.practiceMaterial.hideSolutions;

  for (let i = 0; i < config.practiceMaterial.files.length; i++) {
    const file = config.practiceMaterial.files[i];

    if (file.displayName && file.source && file.target) {
      downloads.practice.push({
        displayName: file.displayName,
        fileName: `${file.target}.pdf`,
      });

      if (globalSolutionsMode === 'no-copy') {
        continue;
      }

      const localSolutionsMode: undefined | false | 'no-copy' | 'no-link' =
        file.hideSolution;

      if (localSolutionsMode === 'no-copy') {
        continue;
      }

      // if (file.solution) {
      //   downloads.practice.push({
      //     displayName: `${file.displayName} - Megoldások`,
      //     fileName: `${file.target}-megoldas.pdf`,
      //   });
      // }

      if (file.pdfSolutionSource) {
        config.practiceMaterial.files[i].pdfSolutionTarget ??=
          file.pdfSolutionSource;
        downloads.practice.push({
          displayName: `${file.displayName} - Megoldások (PDF)`,
          fileName: file.pdfSolutionTarget,
        });
      } else if (file.latexSolutionSource) {
        downloads.practice.push({
          displayName: `${file.displayName} - Megoldások (PDF)`,
          fileName: `${file.latexSolutionTarget}.pdf`,
        });
      }
    }
  }

  const data = {
    dir: subjectDir,
    absoluteDir: join(baseDir, subjectDir),
    absoluteTargetDir: targetDir,
    rcFile,
    buildDir,
    ...config,
    downloads,
  } as SubjectData;

  return {
    [subject as Subject]: data,
  };
}

export type ParsedConfig = Awaited<ReturnType<typeof parseConfig>>;
