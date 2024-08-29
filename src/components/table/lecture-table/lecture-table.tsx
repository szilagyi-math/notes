import { Fragment } from 'react';

import data from './G1-data';

type Week = {
  week: string;
  lecture: string[];
  practice: string;
  practiceLink?: string;
};

interface LectureTableProps {
  subjectCode: 'G1';
}

const LectureTable = () => {
  return (
    <table className='table-fixed w-full min-w-[500px] border border-accent-9'>
      <thead className='bg-accent-9 text-gray-1'>
        <tr>
          <th className='border border-accent-9 px-4 py-2 w-[80px]'>Hét</th>
          <th className='border border-accent-9 px-4 py-2'>Előadás anyaga</th>
          <th className='border border-accent-9 px-4 py-2'>Gyakorlat anyaga</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <Fragment key={index}>
            {row.lecture.map((lectureItem, i) => (
              <tr key={i}>
                {i === 0 && (
                  <td
                    className='border px-4 py-2 text-center'
                    rowSpan={row.lecture.length}
                  >
                    {row.week}
                  </td>
                )}
                <td className='border px-4 py-2'>{lectureItem}</td>
                {i === 0 && (
                  <td
                    className='border px-4 py-2'
                    rowSpan={row.lecture.length}
                  >
                    {row.practice}
                    {row.practiceLink && (
                      <>
                        {' ('}
                        <a
                          href={row.practiceLink}
                          target='_blank'
                          rel='noreferrer'
                          className='underline transition-colors duration-300 hover:text-accent-9 font-semibold'
                        >
                          Letöltés
                        </a>
                        {')'}
                      </>
                    )}
                  </td>
                )}
              </tr>
            ))}
          </Fragment>
        ))}
      </tbody>
    </table>
  );
};

export { LectureTable };

export type { LectureTableProps, Week };
