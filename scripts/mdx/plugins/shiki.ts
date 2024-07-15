import rehypeShikiFromHighlighter from '@shikijs/rehype/core';
import {
  transformerMetaHighlight,
  transformerMetaWordHighlight,
} from '@shikijs/transformers';
import { createCssVariablesTheme, getHighlighterCore } from 'shiki';

const theme = createCssVariablesTheme({
  name: 'css-variables',
  variablePrefix: '--shiki-',
});

const highlighter = await getHighlighterCore({
  themes: [
    theme,
    import('shiki/themes/vitesse-dark.mjs'),
    import('shiki/themes/night-owl.mjs'),
  ],
  langs: [
    import('shiki/langs/js.mjs'),
    import('shiki/langs/ts.mjs'),
    import('shiki/langs/jsx.mjs'),
    import('shiki/langs/tsx.mjs'),
    import('shiki/langs/tex.mjs'),
    import('shiki/langs/latex.mjs'),
  ],
  loadWasm: import('shiki/wasm'),
});

export const shiki = [
  rehypeShikiFromHighlighter,
  highlighter,
  {
    theme: 'night-owl',
    transformers: [transformerMetaHighlight(), transformerMetaWordHighlight()],
  },
] as const;
