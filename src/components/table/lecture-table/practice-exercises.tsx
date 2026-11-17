'use client';

import { useState } from 'react';

export function PracticeExercises({
  pdf,
  count,
}: {
  pdf: string;
  count: number;
}) {
  const [selected, setSelected] = useState<number>();

  return (
    <details
      className='mt-3'
      onToggle={event => {
        if (!event.currentTarget.open) setSelected(undefined);
      }}
    >
      <summary>Feladatok egyenként ({count})</summary>
      <div
        className='my-3 flex flex-wrap gap-2'
        role='group'
        aria-label='Feladat kiválasztása'
      >
        {Array.from({ length: count }, (_, index) => {
          const number = index + 1;
          return (
            <button
              className='exercise-button'
              key={number}
              type='button'
              aria-pressed={selected === number}
              onClick={() => setSelected(number)}
            >
              {number}. feladat
            </button>
          );
        })}
      </div>
      {selected !== undefined && (
        <>
          <a
            className='mb-2 inline-block underline'
            href={`${pdf}#nameddest=practice-${selected}`}
          >
            {selected}. feladat megnyitása a PDF-ben
          </a>
          <iframe
            key={selected}
            className='pdf-preview'
            src={`${pdf}#nameddest=practice-${selected}`}
            title={`${selected}. feladat – gyakorlati feladatlap`}
          />
        </>
      )}
    </details>
  );
}
