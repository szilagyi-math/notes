'use client';

import Link from 'next/link';

import { ChangeEvent, Fragment, useCallback, useState } from 'react';

import type { NextPage } from 'next';
import { Input, Label, RadioGroup } from '@/components';

interface SubjectsPageProps {}

const items = [
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
      },
      {
        name: 'Matematika G3',
        code: 'BMETE94BG03',
        semester: 3,
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
    value: null,
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
    value: null,
    label: 'Összes',
  },
  {
    value: 1,
    label: '1. félév',
  },
  {
    value: 2,
    label: '2. félév',
  },
  {
    value: 3,
    label: '3. félév',
  },
  {
    value: 4,
    label: '4. félév',
  },
];

type Semester = 1 | 2 | 3 | 4;
type Type = 'mandatory' | 'catch-up' | 'optional';

const SubjectsPage: NextPage<SubjectsPageProps> = () => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [semester, setSemester] = useState<Semester | null>(null);
  const [type, setType] = useState<Type | null>(null);

  const isDirty = name || code || semester || type;
  let nonEmpty = false;

  const reset = useCallback(() => {
    setName('');
    setCode('');
    setSemester(null);
    setType(null);
  }, []);

  const handleNameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    [setName]
  );

  const handleCodeChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setCode(e.target.value);
    },
    [setCode]
  );

  return (
    <>
      <h1 className='text-3xl font-semibold mt-8 border-b-2 pb-2 mx-4'>
        Tantárgyak
      </h1>

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

      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 border-b-2 pb-4 mx-4'>
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
          <Label htmlFor='semester'>Ajánlott félév</Label>
          <RadioGroup
            name='semester'
            items={semesterRadioItems}
            value={semester as any}
            onValueChange={setSemester as any}
          />
        </div>

        <div>
          <Label htmlFor='type'>Típus</Label>
          <RadioGroup
            name='type'
            items={typeRadioItems}
            value={type as any}
            onValueChange={setType as any}
          />
        </div>
      </div>

      {items.map(({ title, subjects, value }) => {
        if (type && type !== value) return null;

        let filteredSubjects = subjects;

        if (semester) {
          filteredSubjects = filteredSubjects.filter(
            ({ semester: s }) => s === semester
          );
        }

        if (name) {
          filteredSubjects = filteredSubjects.filter(({ name: n }) =>
            n.toLowerCase().includes(name.toLowerCase())
          );
        }

        if (code) {
          filteredSubjects = filteredSubjects.filter(({ code: c }) =>
            c.toLowerCase().includes(code.toLowerCase())
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
            <div className='overflow-x-auto w-full max-w-full py-2'>
              <table className='mt-2 min-w-[500px] w-full'>
                <thead className='bg-accent-9 text-accent-contrast border-2 border-accent-9'>
                  <tr>
                    <th className='text-left p-2'>Tárgy neve</th>
                    <th className='w-[150px] p-2'>Kód</th>
                    <th className='w-[100px] p-2'>Félév</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSubjects.map(({ name, code, semester, href }) => (
                    <tr
                      className='border-2'
                      key={code}
                    >
                      <td className='p-2'>
                        {href ? (
                          <Link
                            className={`transition duration-300
                              hover:text-accent-9 underline
                              `}
                            href={href}
                          >
                            {name}
                          </Link>
                        ) : (
                          name
                        )}
                      </td>
                      <td className='p-2 text-center font-mono'>{code}</td>
                      <td className='p-2 text-center font-bold'>{semester}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}

      {!nonEmpty && (
        <div className='text-lg mt-4'>
          Nincs találat a keresési feltételeknek.
        </div>
      )}
    </>
  );
};

export default SubjectsPage;
