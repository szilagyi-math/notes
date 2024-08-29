import { defineCollection, s } from 'velite';

import { mdx, getSiblingRefs } from '..';

import type { NoteRef, Subject } from '../types';

// Collections
const mathNotes = defineCollection({
  name: 'MathNotes',
  pattern: ['G1-book/**/index.md'],
  schema: s
    .object({
      title: s.string(),
      path: s.path(),
      description: s.string().optional(),
      metadata: s.metadata(),
      excerpt: s.excerpt(),

      code: mdx(),
    })
    .transform(async (n, ctx) => {
      // TODO: Change this when we have more subjects
      const path = n.path;

      const ref = path // ss-book/xx-chaptertitle/yy-sectiontitle
        .split('/') // [ss-book, xx-chaptertitle, yy-sectiontitle]
        .map(e => e.split('-')[0]) // [ss, xx, yy]
        .join('-') as NoteRef; // ss-xx-yy

      const [subjectCode, chapterCode, sectionCode] = ref.split('-') as [
        Subject,
        string,
        string
      ];

      const depth = sectionCode === '00' ? 1 : 2;
      const [baseDir, ...slug] = path.split('/') as [string, string, string];

      const parentRef =
        sectionCode === '00' ? null : `${subjectCode}-${chapterCode}-00`;

      // TODO: Make this type-safe and also more elegant
      const localToc = ctx.meta.localToc as Array<{
        type: 'definition' | 'theorem' | 'heading';
        title: string;
        id: string;
      }>;

      const absolutePath = ctx.meta.path;
      const basePath = absolutePath.split(`/${path}/`)[0];

      const s = await getSiblingRefs({ basePath, baseDir, slug, subjectCode });

      const href = `notes/${subjectCode}/${
        sectionCode !== '00' ? slug.join('/') : slug[0]
      }`;

      return {
        ...n,
        // Codes (ss, xx, yy)
        subjectCode,
        chapterCode,
        sectionCode,
        // Paths,
        depth,
        absolutePath,
        basePath,
        baseDir,
        // References
        ref,
        parentRef,
        prevRef: s.prevRef,
        nextRef: s.nextRef,
        href,
        absoluteHref: `/${href}`,
        // Local toc if applicable
        localToc: localToc.length > 0 ? localToc : null,
      };
    }),
});

export { mathNotes };
