import type { Subject } from 'mdx';

export type LatexConfig = {
  root_files: Array<{
    source: string;
    target: string;
  }>;
  subject: Subject;
  type: 'book' | 'practise';
};
