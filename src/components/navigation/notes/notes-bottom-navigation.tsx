import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

type NotesBottomNavigationItem = {
  href: string;
  title: string;
};

interface NotesBottomNavigationProps {
  prev?: NotesBottomNavigationItem;
  next?: NotesBottomNavigationItem;
}

const NotesBottomNavigation = ({ prev, next }: NotesBottomNavigationProps) => {
  if (!(prev || next)) return null;

  return (
    <div className='flex space-between gap-4 mt-auto'>
      {prev && (
        <Link
          href={prev.href}
          className='mr-auto relative group ml-4'
        >
          <span className='block pl-8 text-sm text-secondary-fg text-left transition-colors group-hover:text-primary-fg'>
            Előző oldal
          </span>
          <span className='block pl-8 mt-0.5 text-left'>{prev.title}</span>
          <ChevronLeft className='absolute left-0 bottom-0 text-secondary-fg transition-colors group-hover:text-primary-fg' />
        </Link>
      )}
      {next && (
        <Link
          href={next.href}
          className='ml-auto relative group mr-4'
        >
          <span className='block pr-8 text-sm text-secondary-fg text-right transition-colors group-hover:text-primary-fg'>
            Következő oldal
          </span>
          <span className='block pr-8 mt-0.5 text-right'>{next.title}</span>
          <ChevronRight className='absolute right-0 bottom-0 text-secondary-fg transition-colors group-hover:text-primary-fg' />
        </Link>
      )}
    </div>
  );
};

export { NotesBottomNavigation };

export type { NotesBottomNavigationItem, NotesBottomNavigationProps };
