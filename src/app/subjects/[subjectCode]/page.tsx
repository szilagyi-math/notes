import { LectureTable } from '@/components';
import type { NextPage } from 'next';
// import Link from 'next/link';

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

const data = {
  G1: {
    title: 'Matematika G1',
    code: 'BMETE94BG01',
    breakdown: {
      credit: 6,
      lectures: 4,
      practices: 2,
      labs: 0,
      isExam: true,
    },
    pdfNotes: '/downloads/G1-tankonyv.pdf',
    onlineNotes: '/subjects/G1/notes/',
    lecturer: 'Dr. Szilágyi Brigitta',
    lectures: [
      {
        room: 'CHFMAX',
        day: 'Kedd',
        from: '8:15',
        to: '10:00',
      },
      {
        room: 'CHFMAX',
        day: 'Péntek',
        from: '10:15',
        to: '12:00',
      },
    ],
    practices: [
      {
        group: 'HM1',
        room: 'R501',
        day: 'Hétfő',
        from: '8:15',
        to: '10:00',
        edubase: 'https://www.edubase.net/coupon/6xXc9n9mdn8DfL46',
        staff: [
          {
            name: 'Beharóczki István',
          },
          {
            name: 'Sovák Adrienn',
          },
        ],
      },
      {
        group: 'HM2',
        room: 'R513',
        day: 'Hétfő',
        from: '10:15',
        to: '12:00',
        edubase: 'https://www.edubase.net/coupon/ejWTL7MpQzkiG4nW',
        staff: [
          {
            name: 'Biebel Botond',
          },
          {
            name: 'Pesti Patrik',
          },
        ],
      },
      {
        group: 'HM3',
        room: 'R513',
        day: 'Hétfő',
        from: '16:15',
        to: '18:00',
        edubase: 'https://www.edubase.net/coupon/WK39KrnBS96bYa4C',
        staff: [
          {
            name: 'Biebel Botond',
          },
          {
            name: 'Pesti Patrik',
          },
        ],
      },
      {
        group: 'HM4',
        room: 'R513',
        day: 'Kedd',
        from: '14:15',
        to: '16:00',
        edubase: ' https://www.edubase.net/coupon/AbOwIp5tXQ8LYJ5q',
        staff: [
          {
            name: 'Török Regina',
          },
          {
            name: 'Tusor Bálint',
          },
        ],
      },
      {
        group: 'HM5',
        room: 'R515',
        day: 'Szerda',
        from: '12:15',
        to: '14:00',
        edubase: 'https://www.edubase.net/coupon/Ox9fS9dsw9thHT1A',
        staff: [
          {
            name: 'Sándor Tibor',
          },
        ],
      },
      {
        group: 'HM6',
        room: 'R516',
        day: 'Szerda',
        from: '14:15',
        to: '16:00',
        edubase: 'https://www.edubase.net/coupon/8SCh2JFsyU7XrxFY',
        staff: [
          {
            name: 'Kun László Ákos',
          },
        ],
      },
      {
        group: 'HM7',
        room: 'R501',
        day: 'Csütörtök',
        from: '10:15',
        to: '12:00',
        edubase: 'https://www.edubase.net/coupon/76SkYrSQRQ4O91hF',
        staff: [
          {
            name: 'Patacsi Mátyás',
          },
        ],
      },
      {
        group: 'HE1',
        room: 'R513',
        day: 'Csütörtök',
        from: '12:15',
        to: '14:00',
        edubase: 'https://www.edubase.net/coupon/JGz2gogz7NsxZUpn',
        staff: [
          {
            name: 'Sándor Tibor',
          },
        ],
      },
      {
        group: 'HE2',
        room: 'R514',
        day: 'Csütörtök',
        from: '12:15',
        to: '14:00',
        edubase: 'https://www.edubase.net/coupon/TWUEMzRzK3V8LjRD',
        staff: [
          {
            name: 'Prónai Sára',
          },
        ],
      },
    ],
  },
};

const SubjectsPage: NextPage<SubjectsPageProps> = ({ params }) => {
  const subjectCode = params.subjectCode;
  const subject = data[subjectCode];

  return (
    <>
      <h1 className='text-3xl mt-8 pb-2 mx-4 border-b-2 font-semibold'>
        {subject.title}
      </h1>

      <h2 className='mx-4 text-xl mt-4 py-2 border-b-2'>Alapadatok</h2>
      <div className='p-4'>
        <p className='mb-2'>
          Tantárgy kódja: <span className='font-semibold'>{subject.code}</span>
        </p>
        <p className='mb-2'>
          Kreditérték:{' '}
          <span className='font-semibold'>{subject.breakdown.credit}</span>
        </p>
        <p className='mb-2'>
          Heti óraszám:{' '}
          <span className='font-semibold'>{subject.breakdown.lectures}</span> /{' '}
          <span className='font-semibold'>{subject.breakdown.practices}</span> /{' '}
          <span className='font-semibold'>{subject.breakdown.labs}</span>
        </p>
        <p className='mb-2'>
          Oktató: <span className='font-semibold'>{subject.lecturer}</span>
        </p>
        <p className='mb-2'>
          Előadás jegyzet:{' '}
          <a
            href={subject.pdfNotes}
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
        <LectureTable />
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
            {subject.practices.map(practise => (
              <tr key={practise.group}>
                <td className='border px-4 py-2'>
                  {practise.group}
                  {' ['}
                  <a
                    href={practise.edubase}
                    target='_blank'
                    rel='noreferrer'
                    className='underline transition-colors duration-300 hover:text-accent-9 font-semibold'
                  >
                    Edubase
                  </a>
                  {']'}
                </td>
                <td className='border px-4 py-2'>{practise.room}</td>
                <td className='border px-4 py-2'>
                  {practise.day}, {practise.from} - {practise.to}
                </td>
                <td className='border px-4 py-2'>
                  {practise.staff.map((staff, index) => (
                    <span key={staff.name}>
                      {staff.name}
                      {index !== practise.staff.length - 1 && ', '}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SubjectsPage;
