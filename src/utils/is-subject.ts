import type { Subject } from 'common/types';

const SUBJECTS: readonly Subject[] = ['G1', 'G2', 'G3'] as const;

const isSubject = (code: string): code is Subject => {
  return (SUBJECTS as readonly string[]).includes(code);
};

export { SUBJECTS };

export { isSubject };
