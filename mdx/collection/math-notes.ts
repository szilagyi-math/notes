import { defineCollection, s } from 'velite';

import { mdx, getSiblingRefs, mergeMetaTags } from '..';

import type { NoteRef, NoteSlug, Subject } from 'common/types';

// Collections
const mathNotes = defineCollection({
  name: 'MathNotes',
  pattern: [
    //
    'G1/notes/**/*.md',
    'G2/notes/**/*.md',
  ],
  schema: s
    .object({
      // User defined fields
      title: s.string(),
      description: s.string().optional(),
      tags: s.array(s.string()).optional(),
      noLocalToc: s.boolean().optional(),

      // Generated fields
      path: s.path(),
      metadata: s.metadata(),
      excerpt: s.excerpt(),

      // MDX
      code: mdx(),
    })
    .transform(async (n, ctx) => {
      const path = n.path;

      // G1/book/xx-chaptertitle/yy-sectiontitle
      const [subject, , chapter, section] = path.split('/');

      const ref: NoteRef = `${subject}-${chapter.split('-')[0]}-${
        section.split('-')[0]
      }`;

      const [subjectCode, chapterCode, sectionCode] = ref.split('-') as [
        Subject,
        string,
        string,
      ];

      const depth = sectionCode === '00' ? 1 : 2;

      const parentRef =
        sectionCode === '00' ? null : `${subjectCode}-${chapterCode}-00`;

      // TODO: Make this type-safe and also more elegant
      const localToc = ctx.meta.localToc as Array<{
        type: 'definition' | 'theorem' | 'heading';
        title: string;
        id: string;
      }>;

      const slug: NoteSlug =
        sectionCode === '00' ? [chapter] : [chapter, section];

      const pathParts = ctx.meta.path.split('/');
      const fileName = pathParts.pop() as string;
      const subDir = pathParts.pop() as string;
      const baseDir = pathParts.join('/') as string;

      const s = await getSiblingRefs({
        subjectCode,
        fileName,
        subDir,
        baseDir,
      });

      const href = `/subjects/${subjectCode}/notes/${slug.join('/')}`;

      const tags = await mergeMetaTags({
        currentTags: n.tags,
        subjectCode,
      });

      return {
        ...n,
        // Codes (ss, xx, yy)
        subjectCode,
        chapterCode,
        sectionCode,
        // Paths,
        depth,
        fileName,
        subDir,
        baseDir,
        // References
        slug,
        ref,
        parentRef,
        prevRef: s.prevRef,
        nextRef: s.nextRef,
        href,
        // Meta
        tags,
        // Local toc if applicable
        localToc: localToc.length > 0 ? localToc : null,
      };
    }),
});

export { mathNotes };
