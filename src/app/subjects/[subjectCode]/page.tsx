import { LectureTable, Main } from '@/components';
import { data } from 'latex-docs';

import type { NextPage } from 'next';

interface SubjectsPageParams {
  subjectCode: 'G1';
}

interface SubjectsPageProps {
  params: SubjectsPageParams;
}

export const generateStaticParams = async () => {
  return [
    {
      subjectCode: 'G1',
    },
  ];
};

const SubjectsPage: NextPage<SubjectsPageProps> = ({ params }) => {
  const subjectCode = params.subjectCode;
  const subject = data[subjectCode];

  return (
    <Main>
      <h1 className='text-3xl mt-8 pb-2 mx-4 border-b-2 font-semibold'>
        {subject.name}
      </h1>

      <h2 className='mx-4 text-xl mt-4 py-2 border-b-2'>Alapadatok</h2>
      <div className='p-4'>
        <p className='mb-2'>
          Tantárgy kódja: <span className='font-semibold'>{subject.code}</span>
        </p>
        <p className='mb-2'>
          Kreditérték:{' '}
          <span className='font-semibold'>{subject.breakdown.credits}</span>
        </p>
        <p className='mb-2'>
          Heti óraszám:{' '}
          <span className='font-semibold'>{subject.breakdown.lectures}</span> /{' '}
          <span className='font-semibold'>{subject.breakdown.practicals}</span>{' '}
          / <span className='font-semibold'>{subject.breakdown.labs}</span>
        </p>
        <p className='mb-2'>
          Oktató: <span className='font-semibold'>{subject.lecturer}</span>
        </p>
        <p className='mb-2'>
          Előadás jegyzet:{' '}
          <a
            href={`/downloads/${subject.downloads.book.fileName}`}
            target='_blank'
            rel='noreferrer'
            className='underline transition-colors duration-300 hover:text-accent-9 font-semibold'
          >
            PDF
          </a>
          {/* {' (Letölthető) / '} */}
          {/* <Link
            className='underline transition-colors duration-300 hover:text-accent-9 font-semibold'
            href={subject.onlineNotes}
          >
            Online
          </Link>
          {' (Weben olvasható, jelenleg fejlesztés alatt)'} */}
        </p>
      </div>

      <h2 className='mx-4 text-xl mt-4 py-2 border-b-2'>Ütemterv</h2>
      <div className='p-4 overflow-x-auto'>
        <LectureTable subjectCode={subjectCode} />
      </div>

      <h2 className='mx-4 text-xl mt-4 py-2 border-b-2'>
        Gyakorlati csoportok
      </h2>
      <div className='p-4 overflow-x-auto'>
        <table className='table-fixed w-full min-w-[500px]'>
          <thead className='bg-accent-9 text-gray-1 border-accent-9'>
            <tr>
              <th className='border-accent-9 border px-4 py-2'>Csoport</th>
              <th className='border-accent-9 border px-4 py-2'>Terem</th>
              <th className='border-accent-9 border px-4 py-2'>Időpont</th>
              <th className='border-accent-9 border px-4 py-2'>
                Demonstrátorok
              </th>
            </tr>
          </thead>
          <tbody>
            {subject.practicals.map(practice => (
              <tr key={practice.group}>
                <td className='border px-4 py-2'>
                  {practice.group}
                  {' ['}
                  <a
                    href={practice.edubase}
                    target='_blank'
                    rel='noreferrer'
                    className='underline transition-colors duration-300 hover:text-accent-9 font-semibold'
                  >
                    Edubase
                  </a>
                  {']'}
                </td>
                <td className='border px-4 py-2'>{practice.room}</td>
                <td className='border px-4 py-2'>
                  {/* TODO: Do it nicer */}
                  {practice.day === 1 && 'Hétfő'}
                  {practice.day === 2 && 'Kedd'}
                  {practice.day === 3 && 'Szerda'}
                  {practice.day === 4 && 'Csütörtök'}
                  {practice.day === 5 && 'Péntek'}
                  {', '}
                  {practice.start[0].toString().padStart(2, '0')}:
                  {practice.start[1].toString().padStart(2, '0')} -{' '}
                  {practice.end[0].toString().padStart(2, '0')}:
                  {practice.end[1].toString().padStart(2, '0')}
                </td>
                <td className='border px-4 py-2'>
                  {practice.staff.map((staff, index) => (
                    <span key={staff.name}>
                      {staff.name}
                      {index !== practice.staff.length - 1 && ', '}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Main>
  );
};

export default SubjectsPage;
