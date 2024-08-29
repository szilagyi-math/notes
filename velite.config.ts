import { defineConfig } from 'velite';

import { katex, shiki, math } from './mdx';

import { mathNotes } from './mdx';

// Config
const config = defineConfig({
  root: 'content',
  collections: {
    mathNotes,
  },
  mdx: {
    remarkPlugins: [math],
    rehypePlugins: [katex as any, shiki],
  },
});

export default config;
