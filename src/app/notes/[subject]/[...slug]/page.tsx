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
    const [, subject, ...slug] = note.href.split('/');

    return {
      subject,
      slug,
    };
  });
};

interface NotesPageProps {
  params: NotesPageParams;
}

const NotesPage: NextPage<NotesPageProps> = ({ params }) => {
  const subjectCode = params.subject;
  const chapterCode = params.slug[0].split('-')[0];
  let sectionCode = params.slug[1] ? params.slug[1].split('-')[0] : '00';

  const ref = `${subjectCode}-${chapterCode}-${sectionCode}`;

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
