import { getNoteRef } from '@/utils';
import { notFound } from 'next/navigation';
import { mathNotes } from 'content';

import type { Subject, NoteSlug } from 'common/types';
import type { NextPage } from 'next';

interface NotePageParams {
  subjectCode: Subject;
  noteSlug: NoteSlug;
}

export const generateStaticParams = (): NotePageParams[] => {
  return mathNotes.map(note => ({
    subjectCode: note.subjectCode,
    noteSlug: note.slug,
  }));
};

interface NotePageProps {
  params: NotePageParams;
}

const NotesPage: NextPage<NotePageProps> = async props => {
  const params = await props.params;
  if (process.env.NODE_ENV !== 'development') {
    return notFound();
  }

  const ref = getNoteRef(params.subjectCode, params.noteSlug);

  return (
    <div>
      <h1>{ref}</h1>
    </div>
  );
};

export default NotesPage;
