import { readdir, readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';

const output = 'out';
const pages = (await readdir(output, { recursive: true })).filter(path =>
  path.endsWith('.html'),
);
const pdfLinks = new Set();

for (const page of pages) {
  const html = await readFile(join(output, page), 'utf8');
  for (const [, file] of html.matchAll(
    /(?:href|src)="\/downloads\/([^"#?]+\.pdf)(?=["#?])/g,
  )) {
    pdfLinks.add(decodeURIComponent(file));
  }
}

if (!pdfLinks.size) throw new Error('No PDF links found in the exported site.');

const missing = [];
for (const file of pdfLinks) {
  const info = await stat(join(output, 'downloads', file)).catch(error => {
    if (error.code !== 'ENOENT') throw error;
  });
  if (!info?.isFile() || !info.size) missing.push(file);
}

if (missing.length) {
  throw new Error(
    `PDFs missing from site export:\n${missing.sort().join('\n')}`,
  );
}

console.log(`Verified ${pdfLinks.size} linked PDFs in the site export.`);
