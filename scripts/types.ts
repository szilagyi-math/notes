import type { Subject } from 'mdx';

export type DocumentType = 'book' | 'practice';

export type LatexConfig = {
  root_files: Array<{
    source: string;
    target: string;
    display_name: string;
  }>;
  subject: Subject;
  type: DocumentType;
};

// export type Downloads = Record<
//   Subject,
//   Record<
//     DocumentType,
//     Array<{
//       fileName: string;
//       displayName: string;
//     }>
//   >
// >;

export type Downloads = {
  [key in Subject]?: {
    [key in DocumentType]?: Array<{
      fileName: string;
      displayName: string;
    }>;
  };
};
