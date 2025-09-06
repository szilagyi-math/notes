import { LectureTable, Main } from '@/components';
import { Subject } from 'common/types';
import { data } from 'latex-docs';
import { getHuDay, formatTimeRange } from '@/utils';
import Link from 'next/link';

import type { Metadata, NextPage, ResolvingMetadata } from 'next';

interface SubjectsPageParams {
  subjectCode: Subject;
}

interface SubjectsPageProps {
  params: Promise<SubjectsPageParams>;
}

export const generateStaticParams = async () => {
  return [
    {
      subjectCode: 'G1',
    },
    {
      subjectCode: 'G2',
    },
    {
      subjectCode: 'G3',
    },
  ];
};

export const generateMetadata = async (
  props: SubjectsPageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const params = await props.params;
  const subjectCode = params.subjectCode;
  const subject = data[subjectCode];
  const parentMetadata = await parent;

  return {
    title: `${subject.name} - Tantárgyak | Szilágyi Brigitta Weboldala`,
    keywords: [subject.name, subject.code, ...(parentMetadata.keywords || [])],
  };
};

const SubjectsPage: NextPage<SubjectsPageProps> = async props => {
  const params = await props.params;
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
          {subject.onlineNotes && (
            <>
              {' (Letölthető) / '}
              <Link
                className='underline transition-colors duration-300 hover:text-accent-9 font-semibold'
                href={subject.onlineNotes}
              >
                Online
              </Link>
              {' (Weben olvasható, jelenleg fejlesztés alatt)'}
            </>
          )}
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
                  {practice.edubase && !subject.hideEdubase && (
                    <>
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
                    </>
                  )}
                </td>
                <td className='border px-4 py-2'>{practice.room}</td>
                <td className='border px-4 py-2'>
                  {/* TODO: Do it nicer */}
                  {getHuDay(practice.day)}
                  {', '}
                  {formatTimeRange(practice.start, practice.end)}
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
