import { NoteRef, NoteSlug, Subject } from 'common/types';

export const getNoteRef = (subject: Subject, slug: NoteSlug): NoteRef => {
  const chapter = slug[0].slice(0, 2);
  const section = slug[1] ? slug[1].slice(0, 2) : '00';

  const ref = `${subject}-${chapter}-${section}`;

  return ref as NoteRef;
};
