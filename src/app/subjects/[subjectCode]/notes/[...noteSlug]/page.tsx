import { getNoteRef } from '@/utils';
import { notFound } from 'next/navigation';
import { mathNotes } from 'content';

import type { Subject, NoteSlug } from 'common/types';
import type { Metadata, NextPage } from 'next';
import {
  NotesBottomNavigation,
  NotesChapterOverview,
  NotesChapterOverviewTitle,
  NotesLocalToc,
  NotesMobileNavigation,
  SideNavigation,
} from '@/components';
import { MDXContent } from '@/components/mdx';

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

  const ref = getNoteRef(params.subjectCode, params.noteSlug);
  const note = mathNotes.find(n => n.ref === ref);

  if (!note) return notFound();

  let subitems:
    | { title: string; href: string; description: string }[]
    | undefined = undefined;

  if (!note.parentRef) {
    subitems = mathNotes
      .filter(n => {
        return n.parentRef === note.ref;
      })
      .sort((a, b) => {
        return a.ref.localeCompare(b.ref);
      })
      .map(d => ({
        title: d.title,
        href: d.href,
        description: d.description || d.excerpt,
      }));
  }

  const prevNote = mathNotes.find(n => n.ref === note.prevRef);
  const nextNote = mathNotes.find(n => n.ref === note.nextRef);
  const prevItem = prevNote
    ? {
        title: prevNote.title,
        href: prevNote.href,
      }
    : undefined;
  const nextItem = nextNote
    ? {
        title: nextNote.title,
        href: nextNote.href,
      }
    : undefined;

  return (
    <>
      <article className='relative space-y-8 pb-8 md:pl-0 w-text flex-1 overflow-x-clip max-w-full md:max-w-[calc(100vw-var(--aside-width))] lg:max-w-[calc(100vw-2*var(--aside-width))]'>
        <NotesMobileNavigation
          showRight={!note.noLocalToc && !!note.localToc?.length}
          leftBreakpoint='md'
          rightBreakpoint='lg'
        />
        <div className='prose prose-custom mx-auto px-4 md:pl-8 lg:pr-8 max-w-full'>
          <h1 className='mt-7'>
            {note.slug
              .map(s => {
                return parseInt(s.split('-')[0]);
              })
              .join('.')}
            <span className='ml-4' />
            {note.title}
          </h1>
          <MDXContent code={note.code} />
        </div>
        {subitems && (
          <>
            <hr className='my-4 border' />
            <NotesChapterOverviewTitle />
            <NotesChapterOverview sections={subitems} />
          </>
        )}
        <hr className='mb-4 border' />
        <NotesBottomNavigation
          prev={prevItem}
          next={nextItem}
        />
      </article>
      {note.localToc?.length && !note.noLocalToc ? (
        <SideNavigation
          title='Tartalomjegyzék'
          description='A fejezet / alfejezet tartalomjegyzéke'
          breakpoint='lg'
          position='right'
        >
          <NotesLocalToc items={note.localToc} />
        </SideNavigation>
      ) : (
        <div
          aria-hidden='true'
          className='side-nav'
          data-position='right'
          data-breakpoint='lg'
        />
      )}
    </>
  );
};

export default NotesPage;
