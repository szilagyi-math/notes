import { getNoteRef } from '@/utils';
import { notFound } from 'next/navigation';
import { Main } from '@/components';

import type { Subject, NoteSlug } from 'common/types';
import type { NextPage } from 'next';

interface NotePageParams {
  subjectCode: Subject;
  noteSlug: NoteSlug;
}

export const generateStaticParams = () => {
  return [
    {
      subjectCode: 'G1',
      noteSlug: ['01-sets'],
    },
  ];
};

interface NotePageProps {
  params: NotePageParams;
}

const NotesPage: NextPage<NotePageProps> = ({ params }) => {
  if (process.env.NODE_ENV !== 'development') {
    return notFound();
  }

  const ref = getNoteRef(params.subjectCode, params.noteSlug);

  return (
    <Main>
      <h1>{ref}</h1>
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </Main>
  );
};

export default NotesPage;
