import { data } from 'latex-docs';

import type { NextPage, Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Letöltések | Szilágyi Brigitta weboldala',
  description: `Az oldalon található letölthető tananyagok, jegyzetek, és egyéb segédanyagok.`,
  keywords: [
    'Szilágyi Brigitta',
    'BME',
    'Matematika',
    'Oktatás',
    'Analízis',
    'Matematika G1',
    'Matematika G2',
    'Matematika G3',
    'BMETE94BG01',
    'BMETE94BG02',
    'BMETE94BG03',
    'BMETE94BG04',
  ],
};

const NotFound: NextPage = () => {
  const subjects = Object.keys(data) as (keyof typeof data)[];

  return (
    <div className='p-4 gap-8 flex flex-col'>
      {subjects.map(subject => {
        const d = data[subject];

        return (
          <section
            className='flex flex-col gap-2'
            key={subject}
          >
            <h2 className='text-2xl font-bold'>
              {d.name} ({d.code})
            </h2>

            {/* Book */}
            {d.downloads.book && (
              <div className='flex gap-2'>
                <h3>Könyv:</h3>
                <a
                  href={`/downloads/${d.downloads.book.fileName}`}
                  target='_blank'
                  rel='noreferrer'
                  className='underline transition-colors duration-300 hover:text-accent-9 font-semibold'
                >
                  PDF
                </a>
              </div>
            )}

            {/* Practicals */}
            {d.downloads.practice && (
              <>
                <h3>Gyakorlatok anyagai:</h3>
                <ul className='space-y-1'>
                  {d.practiceMaterial.files.map(row => (
                    <li
                      className='list-disc ml-6'
                      key={row.week}
                    >
                      {row.description}
                      {row.target && (
                        <>
                          {' ('}
                          <a
                            href={`/downloads/${row.target}.pdf`}
                            target='_blank'
                            rel='noreferrer'
                            className='underline transition-colors duration-300 hover:text-accent-9 font-semibold'
                          >
                            Letöltés
                          </a>
                          {')'}
                        </>
                      )}
                      {row.solution && (
                        <>
                          {' ('}
                          <a
                            href={`/downloads/${row.solution}`}
                            target='_blank'
                            rel='noreferrer'
                            className='underline transition-colors duration-300 hover:text-accent-9 font-semibold'
                          >
                            Megoldások
                          </a>
                          {')'}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </section>
        );
      })}
    </div>
  );
};

export default NotFound;
