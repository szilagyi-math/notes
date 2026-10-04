import { Main } from '@/components';
import type { Metadata, NextPage } from 'next';
import Link from 'next/link';

const handwrittenNotes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];

export const metadata: Metadata = {
  title: 'Kézzel írt kidolgozások | Matematika G1',
  description: 'A Matematika G1 gyakorlatok kézzel írt kidolgozásai.',
};

const HandwrittenNotesPage: NextPage = () => {
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
        Kézzel írt kidolgozások
      </h1>

      <div className='p-4'>
        <ul className='space-y-2'>
          {handwrittenNotes.map(week => {
            const paddedWeek = String(week).padStart(2, '0');

            return (
              <li key={week}>
                <a
                  href={`/downloads/G1-gyak-${paddedWeek}-kezzel-irt-megoldas.pdf`}
                  target='_blank'
                  rel='noreferrer'
                  className='underline transition-colors duration-300 hover:text-accent-9'
                >
                  G1 {week}. gyakorlat - kézzel írt kidolgozás
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Main>
  );
};

export default HandwrittenNotesPage;
