import { data } from 'latex-docs';

type Week = {
  week: string;
  lecture: string[];
  practice: string;
  practiceLink?: string;
};

interface LectureTableProps {
  subjectCode: 'G1';
}

const LectureTable = ({ subjectCode }: LectureTableProps) => {
  const subject = data[subjectCode];

  return (
    <table className='table-fixed w-full border border-accent-9'>
      <thead className='bg-accent-9 text-gray-1'>
        <tr>
          <th className='border border-accent-9 px-4 py-2 w-[80px]'>Hét</th>
          <th className='border border-accent-9 px-4 py-2'>Gyakorlat anyaga</th>
        </tr>
      </thead>
      <tbody>
        {subject.practiceMaterial.files.map(row => (
          <tr key={row.week}>
            <td className='border px-4 py-2 text-center'>{row.week}</td>
            <td className='border px-4 py-2'>
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
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { LectureTable };

export type { LectureTableProps, Week };
