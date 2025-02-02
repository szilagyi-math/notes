import { getNoteRef } from '@/utils';
import { notFound } from 'next/navigation';
import { mathNotes } from 'content';

import type { Subject, NoteSlug } from 'common/types';
import type { Metadata, NextPage, ResolvingMetadata } from 'next';
import { Main } from '@/components';

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
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const { subjectCode, noteSlug } = await props.params;
  const ref = getNoteRef(subjectCode, noteSlug);

  return {
    title: `${subjectCode}`,
  };
};

const NotesPage: NextPage<NotePageProps> = async props => {
  const params = await props.params;

  if (process.env.NODE_ENV !== 'development') {
    return notFound();
  }

  const ref = getNoteRef(params.subjectCode, params.noteSlug);

  return (
    <Main>
      <h1>{ref}</h1>
    </Main>
  );
};

export default NotesPage;
