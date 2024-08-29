import Link from 'next/link';
import { Button } from '../ui';

interface SubjectsOverviewProps {}

const items = [
  {
    title: 'Matematika G1',
    code: 'BMETE94BG01',
    href: '/subjects/G1',
    area: [
      'Analitikus geometria',
      'Halmazelmélet',
      'Sorozatok és sorok',
      'Függvények',
      'Differenciál és integrálszámítás',
    ],
  },
  {
    title: 'Matematika G2',
    code: 'BMETE94BG02',
    area: [
      'Lineáris algebra',
      'Függvénysorok',
      'Többváltozós függvények',
      'Többváltozós kalkulus',
    ],
  },
  {
    title: 'Matematika G3',
    code: 'BMETE94BG03',
    area: ['Vektoranalízis', 'Differenciálegyenletek'],
  },
];

const SubjectsOverview = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      {items.map(({ title, code, href, area }) => (
        <div
          key={code}
          className='border-2 border-accent-9 rounded-lg flex flex-col gap-4 text-center'
        >
          <h3 className='text-3xl font-semibold bg-accent-9 p-4 text-gray-1'>
            {title}
          </h3>
          <p>({code})</p>

          <ul className='min-h-[5lh]'>
            {area.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className='mb-10 mt-4'>
            {href ? (
              <Button
                asChild
                className='btn inline-block'
                size='lg'
              >
                <Link href={href}>Tovább</Link>
              </Button>
            ) : (
              <Button
                size='lg'
                disabled
              >
                Tovább
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export { SubjectsOverview };

export type { SubjectsOverviewProps };
