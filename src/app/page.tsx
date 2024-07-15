import Link from 'next/link';
import { analisysNotes } from 'content';

import type { NextPage } from 'next';

interface HomePageProps {}

const HomePage: NextPage<HomePageProps> = () => {
  return (
    <div className='p-4 space-y-4'>
      <h1 className='text-2xl'>Homepage</h1>

      <ul className='pl-5 list-disc space-y-2'>
        {analisysNotes.map(note => (
          <li key={note.ref}>
            <Link href={`/notes/G1/${note.slug.join('/')}`}>{note.title}</Link>{' '}
            [{note.ref}]
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
