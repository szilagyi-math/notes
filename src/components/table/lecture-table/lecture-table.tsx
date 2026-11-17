import { Subject } from 'common/types';
import { data } from 'latex-docs';
import { PracticeExercises } from './practice-exercises';

type Week = {
  week: string;
  lecture: string[];
  practice: string;
  practiceLink?: string;
};

interface LectureTableProps {
  subjectCode: Subject;
}

const LectureTable = ({ subjectCode }: LectureTableProps) => {
  const subject = data[subjectCode];

  return (
    <ol className='grid gap-3'>
      {subject.practiceMaterial.files.map(row => (
        <li
          className='practice-card'
          key={row.week}
        >
          <p className='course-card-meta'>{row.week}. hét</p>
          <h3 className='mb-2 font-semibold'>{row.description}</h3>
          <div className='practice-links'>
            {row.target && (
              <a
                href={`/downloads/${row.target}.pdf`}
                target='_blank'
                rel='noreferrer'
                className='underline transition-colors duration-300 hover:text-accent-9 font-semibold'
              >
                Feladatlap (PDF)
              </a>
            )}
            {subject.practiceMaterial.hideSolutions !== 'no-link' &&
              row.hideSolution !== 'no-link' &&
              row.pdfSolutionSource && (
                <a
                  href={`/downloads/${row.pdfSolutionTarget}`}
                  target='_blank'
                  rel='noreferrer'
                  className='underline transition-colors duration-300 hover:text-accent-9 font-semibold'
                >
                  Megoldások (PDF)
                </a>
              )}
            {subject.practiceMaterial.hideSolutions !== 'no-link' &&
              row.hideSolution !== 'no-link' &&
              row.latexSolutionSource && (
                <a
                  href={`/downloads/${row.latexSolutionTarget}.pdf`}
                  target='_blank'
                  rel='noreferrer'
                  className='underline transition-colors duration-300 hover:text-accent-9 font-semibold'
                >
                  Megoldások (PDF)
                </a>
              )}
            {row.videoLink && (
              <a
                href={row.videoLink}
                target='_blank'
                rel='noreferrer'
                className='underline transition-colors duration-300 hover:text-accent-9 font-semibold'
              >
                Videó
              </a>
            )}
          </div>
          {row.target && !!row.exerciseLines?.length && (
            <PracticeExercises
              pdf={`/downloads/${row.target}.pdf`}
              count={row.exerciseLines.length}
            />
          )}
        </li>
      ))}
    </ol>
  );
};

export { LectureTable };

export type { LectureTableProps, Week };
