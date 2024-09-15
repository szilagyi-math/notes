import { mathNotes } from 'content';

import type { Subject } from 'common/types';

export type MenuItem = {
  title: string;
  href: string;
  id: string;

  subItems: SubMenuItem[];
};

export type SubMenuItem = Omit<MenuItem, 'subItems'> & { subItems?: never };

const getTocItems = (subject: Subject): MenuItem[] => {
  const filtered = mathNotes.filter(note => note.subjectCode === subject);

  const sorted = filtered.sort((a, b) => {
    const aRef = a.ref.slice(3);
    const bRef = b.ref.slice(3);
    return aRef.localeCompare(bRef);
  });

  const items: MenuItem[] = [];

  for (let i = 0; i < sorted.length; i++) {
    const note = sorted[i];

    if (note.depth === 1) {
      const current = {
        title: note.title,
        href: note.href,
        id: note.ref,
        subItems: [],
      };

      items.push(current);
    } else {
      const parent = items[items.length - 1];

      const current = {
        title: note.title,
        href: note.href,
        id: note.ref,
      };

      parent.subItems.push(current);
    }
  }

  return items;
};

const toc = Array.from(new Set(mathNotes.map(note => note.subjectCode))).reduce(
  (acc, subject) => {
    acc[subject] = getTocItems(subject);
    return acc;
  },
  {} as Record<Subject, MenuItem[]>
);

export default toc;
