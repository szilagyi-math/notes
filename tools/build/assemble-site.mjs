import { copyFile, mkdir, readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

await mkdir('out/downloads', { recursive: true });
for (const file of await readdir('latex-docs')) {
  if (file.endsWith('.pdf')) {
    await copyFile(join('latex-docs', file), join('out/downloads', file));
  }
}
// Preserve the existing handwritten G1 download URLs and original bytes.
for (const file of await readdir('content/G1/practice-solutions')) {
  if (/^G1-gyak-.*-megoldas\.pdf$/.test(file)) {
    await copyFile(
      join('content/G1/practice-solutions', file),
      join('out/downloads', file.replace('-megoldas.pdf', '-kezzel-irt-megoldas.pdf')),
    );
  }
}
await writeFile('out/.nojekyll', '');
await import('./verify-published-pdfs.mjs');
