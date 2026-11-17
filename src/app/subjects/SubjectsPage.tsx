'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { useCallback, useState } from 'react';
import { Input, Label, RadioGroup } from '@/components';

import type { ChangeEvent } from 'react';

interface SubjectsPageProps {}

const items: {
  title: string;
  value: string;
  subjects: (
    | {
        name: string;
        code: string;
        semester: number;
        href: string;
      }
    | {
        name: string;
        code: string;
        semester: number;
        href?: undefined;
      }
  )[];
}[] = [
  {
    title: 'Kötelező tárgyak',
    value: 'mandatory',
    subjects: [
      {
        name: 'Matematika G1',
        code: 'BMETE94BG01',
        semester: 1,
        href: '/subjects/G1',
      },
      {
        name: 'Matematika G2',
        code: 'BMETE94BG02',
        semester: 2,
        href: '/subjects/G2',
      },
      {
        name: 'Matematika G3',
        code: 'BMETE94BG03',
        semester: 3,
        href: '/subjects/G3',
      },
    ],
  },
  {
    title: 'Felzárkóztató tárgyak',
    value: 'catch-up',
    subjects: [
      {
        name: 'Matematika G1F',
        code: 'BMETE94BG11',
        semester: 1,
      },
      {
        name: 'Matematika G2F',
        code: 'BMETE94BG12',
        semester: 2,
      },
      {
        name: 'Matematika G3F',
        code: 'BMETE94BG13',
        semester: 3,
      },
    ],
  },
  {
    title: 'Szabadon választható tárgyak',
    value: 'optional',
    subjects: [
      {
        name: 'Az egyváltozós analízis mérnöki alkalmazásai',
        code: 'BMETE90AX41',
        semester: 1,
      },
      {
        name: 'A többváltozós analízis mérnöki alkalmazásai',
        code: 'BMETE90AX42',
        semester: 2,
      },
      {
        name: 'Görbék, felületek és transzformációk geometriája mérnököknek',
        code: 'BMETE94AX11',
        semester: 3,
      },
      {
        name: 'A differenciálegyenletek és a vektoranalízis mérnöki alkalmazásai 1',
        code: 'BMETE90AX43',
        semester: 3,
      },
      {
        name: 'A differenciálegyenletek és a vektoranalízis mérnöki alkalmazásai 2',
        code: 'BMETE90AX44',
        semester: 4,
      },
      {
        name: 'A valószínűségszámítás és a statisztika mérnöki alkalmazásai 1',
        code: 'BMETE90AX45',
        semester: 4,
      },
      {
        name: 'Matematika G4',
        code: 'BMETE94BG43',
        semester: 4,
      },
    ],
  },
];

const typeRadioItems = [
  {
    value: 'all',
    label: 'Összes',
  },
  {
    value: 'mandatory',
    label: 'Kötelező',
  },
  {
    value: 'catch-up',
    label: 'Felzárkóztató',
  },
  {
    value: 'optional',
    label: 'Szabadon választható',
  },
];

const semesterRadioItems = [
  {
    value: '0',
    label: 'Összes',
  },
  {
    value: '1',
    label: '1. félév',
  },
  {
    value: '2',
    label: '2. félév',
  },
  {
    value: '3',
    label: '3. félév',
  },
  {
    value: '4',
    label: '4. félév',
  },
];

const SubjectsPage = ({ home = false }: { home?: boolean }) => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [semester, setSemester] = useState('0');
  const [type, setType] = useState('all');

  const isDirty = name || code || semester !== '0' || type !== 'all';
  let nonEmpty = false;

  const reset = useCallback(() => {
    setName('');
    setCode('');
    setSemester('0');
    setType('all');
  }, []);

  const handleNameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    [setName],
  );

  const handleCodeChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setCode(e.target.value);
    },
    [setCode],
  );

  return (
    <div className='course-catalog'>
      {home ? (
        <section className='course-intro mx-4'>
          <p className='course-intro-owner'>Szilágyi Brigitta</p>
          <h1>BME matematika</h1>
          <p>Jegyzetek, gyakorlófeladatok és letölthető tananyagok.</p>
        </section>
      ) : (
        <h1 className='page-title mx-4'>Tantárgyak</h1>
      )}

      <h2 className='text-xl mt-4 border-b-2 py-2 mb-2 mx-4'>
        Szűrés
        {isDirty ? (
          <button
            className='text-accent-9 text-sm ml-2'
            onClick={reset}
          >
            (Szűrők törlése)
          </button>
        ) : null}
      </h2>

      <div className='course-filters grid grid-cols-1 sm:grid-cols-2 gap-4 mx-4'>
        <div>
          <Label htmlFor='name'>Tárgy neve</Label>
          <Input
            id='name'
            value={name}
            onChange={handleNameChange}
            placeholder='Matematika G1'
          />
        </div>

        <div>
          <Label htmlFor='code'>Tárgykód</Label>
          <Input
            id='code'
            value={code}
            onChange={handleCodeChange}
            placeholder='BMETE94BG01'
          />
        </div>

        <div>
          <p
            className='label'
            id='semester-label'
          >
            Ajánlott félév
          </p>
          <RadioGroup
            name='semester'
            aria-labelledby='semester-label'
            items={semesterRadioItems}
            value={semester}
            onValueChange={setSemester}
          />
        </div>

        <div>
          <p
            className='label'
            id='type-label'
          >
            Típus
          </p>
          <RadioGroup
            name='type'
            aria-labelledby='type-label'
            items={typeRadioItems}
            value={type}
            onValueChange={setType}
          />
        </div>
      </div>

      {items.map(({ title, subjects, value }) => {
        if (type !== 'all' && type !== value) return null;

        let filteredSubjects = subjects;

        if (semester !== '0') {
          filteredSubjects = filteredSubjects.filter(
            ({ semester: s }) => String(s) === semester,
          );
        }

        if (name) {
          filteredSubjects = filteredSubjects.filter(({ name: n }) =>
            n.toLowerCase().includes(name.toLowerCase()),
          );
        }

        if (code) {
          filteredSubjects = filteredSubjects.filter(({ code: c }) =>
            c.toLowerCase().includes(code.toLowerCase()),
          );
        }

        if (!filteredSubjects.length) return null;

        nonEmpty = true;

        return (
          <div
            className='mx-4'
            key={value}
          >
            <h2 className='text-xl mt-4'>{title}</h2>
            <ul className='course-grid'>
              {filteredSubjects.map(({ name, code, semester, href }) => {
                const details = (
                  <>
                    <span className='course-card-title'>{name}</span>
                    <span className='course-card-meta'>
                      {code} · {semester}. félév
                    </span>
                  </>
                );

                return (
                  <li key={code}>
                    {href ? (
                      <Link
                        className='course-card'
                        href={href}
                      >
                        <div>{details}</div>
                        <ArrowUpRight
                          size={18}
                          aria-hidden='true'
                        />
                      </Link>
                    ) : (
                      <div className='course-card course-card-static'>
                        {details}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}

      {!nonEmpty && (
        <div
          className='text-lg mt-4 mx-4'
          role='status'
        >
          Nincs találat a keresési feltételeknek.
        </div>
      )}
    </div>
  );
};

export default SubjectsPage;

export type { SubjectsPageProps };
