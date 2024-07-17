// TODO: Add a description + make it type-safe

import remarkGfm from 'remark-gfm';
import { visit } from 'unist-util-visit';
import { s } from 'velite';

import type { Root } from 'mdast';
import type { PluggableList } from 'unified';

const remarkRemoveComments = () => (tree: Root) => {
  visit(tree, ['mdxFlowExpression'], (node, index, parent: any) => {
    if (node.value.match(/\/\*([\s\S]*?)\*\//g)) {
      parent.children.splice(index, 1);
      return ['skip', index]; // https://unifiedjs.com/learn/recipe/remove-node/
    }
  });
};

export const mdx = () =>
  s
    .custom<string | undefined>(i => i === undefined || typeof i === 'string')
    .transform<string>(async (value, { meta, addIssue }) => {
      value = value ?? meta.content;
      if (value == null || value.length === 0) {
        addIssue({ code: 'custom', message: 'The content is empty' });
        return '';
      }

      const { mdx } = meta.config;

      const { path } = meta;
      const [, ...slug] = path
        .split('/content/')
        .pop()!
        .split('/')
        .slice(0, -1);
      const localToc: Array<{
        type: 'definition' | 'theorem' | 'heading';
        title: string;
        id: string;
      }> = [];

      const set = new Set<string>();

      const remarkPlugins = [
        remarkGfm,
        remarkRemoveComments,
        () => {
          return (tree: Root) => {
            const chap = parseInt(slug[0].split('-')[0]);
            const sec = slug[1] ? parseInt(slug[1].split('-')[0]) : 0;
            let subsec = 0;
            let subsubsec = 0;

            visit(tree, ['mdxJsxFlowElement', 'heading'], node => {
              if (node.type === 'mdxJsxFlowElement') {
                if (node.name === 'Definition' || node.name === 'Theorem') {
                  const title =
                    (node.attributes.find((a: any) => a.name === 'title')
                      ?.value as string) || '';
                  const id =
                    (node.attributes.find((a: any) => a.name === 'id')
                      ?.value as string) || '';

                  if (set.has(id)) {
                    addIssue({
                      fatal: false,
                      code: 'custom',
                      message: `Duplicate id: ${id}`,
                    });
                  } else {
                    set.add(id);
                  }

                  localToc.push({
                    type: node.name === 'Definition' ? 'definition' : 'theorem',
                    title,
                    id,
                  });
                }
              } else if (node.type === 'heading') {
                // @ts-ignore
                const value = node.children[0]?.value as string;

                let id: string;

                if (node.depth === 2) {
                  subsec++;
                  subsubsec = 0;

                  id = `subsection.${chap}.${sec}.${subsec}`;
                } else if (node.depth === 3) {
                  subsubsec++;

                  id = `subsubsection.${chap}.${sec}.${subsec}.${subsubsec}`;
                } else {
                  addIssue({
                    fatal: false,
                    code: 'custom',
                    message: `Invalid heading depth: ${node.depth}`,
                  });

                  id = 'INVALID_HEADING_ID';
                }

                if (set.has(id) && id !== 'INVALID_HEADING_ID') {
                  addIssue({
                    fatal: false,
                    code: 'custom',
                    message: `Duplicate id: ${id}`,
                  });
                } else {
                  set.add(id);
                }

                node.data = {
                  hProperties: {
                    id,
                  },
                };

                localToc.push({ type: 'heading', title: value, id });
              }
            });
          };
        },
      ] as PluggableList;
      const rehypePlugins = [] as PluggableList;

      if (mdx?.remarkPlugins != null) remarkPlugins.push(...mdx.remarkPlugins);
      if (mdx?.rehypePlugins != null) rehypePlugins.push(...mdx.rehypePlugins);

      const { minify } = await import('terser');
      const { compile } = await import('@mdx-js/mdx');

      try {
        const code = await compile(
          { value },
          {
            outputFormat: 'function-body',
            jsx: false,
            remarkPlugins,
            rehypePlugins,
          }
        );

        meta.localToc = localToc;

        const minified = await minify(code.toString(), {
          module: true,
          compress: true,
          keep_classnames: true,
          mangle: { keep_fnames: true },
          parse: { bare_returns: true },
        });
        return minified.code ?? code.toString();
      } catch (err: any) {
        addIssue({ fatal: true, code: 'custom', message: err.message });
        return null as never;
      }
    });
