import { LectureTable } from '@/components';
import { Subject } from 'common/types';
import { data } from 'latex-docs';
import { getHuDay, formatTimeRange } from '@/utils';
import Link from 'next/link';
import { ArrowUpRight, Download } from 'lucide-react';

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
    <div className='course-page'>
      <nav
        className='notes-trail mx-4'
        aria-label='Tantárgy navigáció'
      >
        <Link href='/subjects'>Tantárgyak</Link>
      </nav>
      <header className='mx-4 mb-5'>
        <h1 className='page-title'>{subject.name}</h1>
        <p className='course-card-meta'>
          {subject.code} · {subject.lecturer}
        </p>
        <dl className='mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm'>
          <div>
            <dt className='inline'>Kreditérték </dt>
            <dd className='inline font-semibold'>
              {subject.breakdown.credits}
            </dd>
          </div>
          <div>
            <dt className='inline'>
              Heti óraszám (előadás / gyakorlat / labor){' '}
            </dt>
            <dd className='inline font-semibold'>
              {subject.breakdown.lectures} / {subject.breakdown.practicals} /{' '}
              {subject.breakdown.labs}
            </dd>
          </div>
        </dl>
      </header>

      <section
        className='mx-4 mb-6'
        aria-labelledby='course-materials'
      >
        <h2
          className='text-xl'
          id='course-materials'
        >
          Tananyagok
        </h2>
        <div className='course-grid'>
          <a
            className='course-card'
            href={`/downloads/${subject.downloads.book.fileName}`}
          >
            <div>
              <span className='course-card-title'>Előadásjegyzet</span>
              <span className='course-card-meta'>Teljes tankönyv (PDF)</span>
            </div>
            <Download
              size={18}
              aria-hidden='true'
            />
          </a>
          {subject.onlineNotes && (
            <Link
              className='course-card'
              href={subject.onlineNotes}
            >
              <div>
                <span className='course-card-title'>Webes fejezetek</span>
                <span className='course-card-meta'>
                  Olvasható előadásjegyzet
                </span>
              </div>
              <ArrowUpRight
                size={18}
                aria-hidden='true'
              />
            </Link>
          )}
          {subjectCode === 'G1' && (
            <Link
              className='course-card'
              href='/subjects/G1/handwritten'
            >
              <span className='course-card-title'>Kézzel írt kidolgozások</span>
              <ArrowUpRight
                size={18}
                aria-hidden='true'
              />
            </Link>
          )}
        </div>
      </section>

      {subjectCode === 'G1' && (
        <Link
          className='mx-4 mb-4 inline-block font-semibold underline hover:text-accent-9'
          href='/subjects/G1/results'
        >
          Eredmények megtekintése
        </Link>
      )}

      <h2 className='mx-4 text-xl mt-4 py-2 border-b-2'>Heti gyakorlatok</h2>
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
    </div>
  );
};

export default SubjectsPage;
