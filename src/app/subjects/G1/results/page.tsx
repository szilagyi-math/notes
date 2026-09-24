import { Main } from '@/components';
import type { Metadata, NextPage } from 'next';
import Link from 'next/link';

const RESULTS_APP_URL =
  'https://script.google.com/macros/s/AKfycbykSY3Xf6MX-rN5oiUHEHTGG74TmyTgLp6x6FofGLGPvJl40my0MEAL-mxc5qvz3fFz/exec';

export const metadata: Metadata = {
  title: 'Eredmények | Matematika G1',
  description: 'Matematika G1 eredmények lekérdezése Neptun-kód alapján.',
};

const ResultsPage: NextPage = () => {
  return (
    <Main>
      <div className='mx-4 mt-6'>
        <Link
          href='/subjects/G1'
          className='underline transition-colors duration-300 hover:text-accent-9'
        >
          ← Vissza a G1 tárgyoldalra
        </Link>
      </div>

      <h1 className='text-3xl mt-6 pb-2 mx-4 border-b-2 font-semibold'>
        G1 eredmények
      </h1>

      <div className='p-4'>
        <iframe
          src={RESULTS_APP_URL}
          title='G1 eredmények lekérdezése'
          className='block w-full min-h-[900px] border-0'
          referrerPolicy='no-referrer'
        />
      </div>
    </Main>
  );
};

export default ResultsPage;
