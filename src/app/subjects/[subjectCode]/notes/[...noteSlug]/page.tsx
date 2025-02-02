import { getNoteRef } from '@/utils';
import { notFound } from 'next/navigation';
import { mathNotes } from 'content';

import type { Subject, NoteSlug } from 'common/types';
import type { Metadata, NextPage } from 'next';

interface NotePageParams {
  subjectCode: Subject;
  noteSlug: NoteSlug;
}

interface NotePageProps {
  params: Promise<NotePageParams>;
}

export const generateStaticParams = (): NotePageParams[] => {
  return mathNotes.map(note => ({
    subjectCode: note.subjectCode,
    noteSlug: note.slug,
  }));
};

export const generateMetadata = async (
  props: NotePageProps,
): Promise<Metadata> => {
  const { subjectCode, noteSlug } = await props.params;
  const ref = getNoteRef(subjectCode, noteSlug);
  const note = mathNotes.find(n => n.ref === ref);

  if (!note) throw new Error(`Note not found: ${ref}`);

  let title: string;
  if (note.parentRef) {
    const parentNote = mathNotes.find(n => n.ref === note.parentRef);
    if (!parentNote)
      throw new Error(`Parent note not found: ${note.parentRef}`);

    title = `${parentNote.title} – ${note.title} | Matematika ${subjectCode}`;
  } else {
    title = `${note.title} | Matematika ${subjectCode}`;
  }

  return {
    title,
    description: note.description,
    keywords: note.tags,
  };
};

const NotesPage: NextPage<NotePageProps> = async props => {
  const params = await props.params;

  if (process.env.NODE_ENV !== 'development') {
    return notFound();
  }

  const ref = getNoteRef(params.subjectCode, params.noteSlug);

  return (
    <>
      <h1>{ref}</h1>
    </>
  );
};

export default NotesPage;
