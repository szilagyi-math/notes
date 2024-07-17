import fs from 'fs/promises';
import path from 'path';

import type { Subject } from 'mdx';

type File = {
  path: string;
  filename: string;
  subject: Subject;
  type: 'book';
};

const downloads: File[] = [
  {
    path: 'content/G1-book/__BUILD__/main.pdf',
    filename: 'G1-tankonyv.pdf',
    subject: 'G1',
    type: 'book',
  },
];

const moveFiles = async (
  files = downloads,
  buildDir = 'build',
  outDir: string | string[] = ['out', 'downloads']
) => {
  const cwd = process.cwd();

  // Create the output directory if it doesn't exist
  await fs.mkdir(
    path.join(cwd, ...(typeof outDir === 'string' ? [outDir] : outDir)),
    {
      recursive: true,
    }
  );

  for (const file of files) {
    const src = path.join(cwd, file.path).replace('__BUILD__', buildDir);
    const dest = path.join(
      cwd,
      ...(typeof outDir === 'string' ? [outDir] : outDir),
      file.filename
    );

    await fs.copyFile(src, dest);

    console.log(`Copied ${file.filename}`);
  }
};

export { downloads, moveFiles };
