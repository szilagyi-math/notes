import { analisysNotes } from 'content';

export type MenuItem = {
  title: string;
  href: string;
  id: string;

  subItems: SubMenuItem[];
};

export type SubMenuItem = Omit<MenuItem, 'subItems'> & { subItems?: never };

const getMenuItems = ({
  subject,
}: {
  subject: 'G1' | 'G2' | 'G3';
}): MenuItem[] => {
  const filtered = analisysNotes.filter(doc => doc.subjectCode === subject);

  const sorted = filtered.sort((a, b) => {
    const aRef = a.ref.slice(3);
    const bRef = b.ref.slice(3);
    return aRef.localeCompare(bRef);
  });

  let items: MenuItem[] = [];

  for (let i = 0; i < sorted.length; i++) {
    const note = sorted[i];

    if (note.depth === 1) {
      const current = {
        title: note.title,
        href: note.absoluteHref,
        id: note.ref,
        subItems: [],
      };

      items.push(current);
    } else {
      const parent = items[items.length - 1];

      const current = {
        title: note.title,
        href: note.absoluteHref,
        id: note.ref,
      };

      parent.subItems.push(current);
    }
  }

  return items;
};

const toc = {
  G1: getMenuItems({ subject: 'G1' }),
  G2: getMenuItems({ subject: 'G2' }),
  G3: getMenuItems({ subject: 'G3' }),
};

export default toc;
