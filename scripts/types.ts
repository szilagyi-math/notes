import type { Subject } from 'mdx';

export type DocumentType = 'book' | 'practice';

export type PracticeConfig = {
  subject: Subject;
  type: 'practice';
  root_files: Array<{
    source: string;
    target: string;
    display_name: string;
    description: string;
    week: number;
    should_compile?: boolean;
  }>;
};

export type BookConfig = {
  subject: Subject;
  type: 'book';
  root_files: Array<{
    source: string;
    target: string;
    display_name: string;
  }>;
};

export type LatexConfig = PracticeConfig | BookConfig;

export type Downloads = {
  [key in Subject]?: {
    [key in DocumentType]?: Array<{
      fileName: string;
      displayName: string;
    }>;
  };
};
