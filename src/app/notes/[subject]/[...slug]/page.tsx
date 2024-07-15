import { analisysNotes } from 'content';
import { MDXContent } from '@/components';

import type { NextPage } from 'next';
import type { NoteSlug, Subject } from 'scripts';

interface NotesPageParams {
  subject: Subject;
  slug: NoteSlug;
}

export const generateStaticParams = () => {
  return analisysNotes.map(note => {
    return {
      subject: note.subjectCode,
      slug: note.slug,
    };
  });
};

interface NotesPageProps {
  params: NotesPageParams;
}

const NotesPage: NextPage<NotesPageProps> = ({ params }) => {
  const ref = `${params.subject}-${params.slug
    .map(s => s.split('-')[0])
    .join('-')}`;

  const note = analisysNotes.find(note => note.ref === ref);

  if (!note) {
    throw new Error(`Note not found: ${ref}`);
  }

  return (
    <div className='p-4 prose dark:prose-invert'>
      <MDXContent code={note.code} />
    </div>
  );
};

export default NotesPage;
