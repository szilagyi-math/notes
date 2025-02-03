import Link from 'next/link';

interface NotesChapterOverviewProps {
  sections: Array<{
    title: string;
    description: string;
    href: string;
  }>;
}

const NotesChapterOverview = ({ sections }: NotesChapterOverviewProps) => {
  return (
    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 px-4 md:pl-8 xl:pr-8'>
      {sections.map(section => (
        <Link
          key={section.title}
          href={section.href}
          className='border rounded-xl p-4'
        >
          <h5 className='font-semibold text-lg mb-2'>{section.title}</h5>
          <p className='text-sm text-secondary-fg line-clamp-2'>
            {section.description}
          </p>
        </Link>
      ))}
    </div>
  );
};

const NotesChapterOverviewTitle = () => {
  return (
    <h4 className='text-2xl font-semibold px-4 md:pl-8 xl:pr-8'>
      Ebben a fejezetben
    </h4>
  );
};

export { NotesChapterOverview, NotesChapterOverviewTitle };

export type { NotesChapterOverviewProps };
