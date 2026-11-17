'use client';

import { useState } from 'react';

type Figure = {
  file: string;
  width: number;
  height: number;
  text: string;
};

type Exercise = {
  question: Figure[];
  solution?: Figure[];
};

function Figures({
  figures,
  base,
  label,
}: {
  figures: Figure[];
  base: string;
  label: string;
}) {
  return figures.map(({ file, width, height, text }) => (
    <div
      key={file}
      className='practice-figure-scroll'
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className='practice-figure'
        src={`${base}/${file}`}
        alt={text || label}
        width={width}
        height={height}
        loading='lazy'
      />
    </div>
  ));
}

export function PracticeExercises({
  worksheet,
  count,
}: {
  worksheet: string;
  count: number;
}) {
  const [exercises, setExercises] = useState<Exercise[]>();
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const base = `/static/practice/${worksheet}`;

  async function loadExercises() {
    if (exercises || status === 'loading') return;
    setStatus('loading');

    try {
      const response = await fetch(`${base}/index.json`);
      if (!response.ok) throw new Error('A feladatok nem érhetők el.');
      setExercises(await response.json());
      setStatus('idle');
    } catch {
      setStatus('error');
    }
  }

  return (
    <details
      className='mt-3'
      onToggle={event => {
        if (event.currentTarget.open) void loadExercises();
      }}
    >
      <summary>Feladatok és megoldások ({count})</summary>
      {status === 'loading' && (
        <p
          role='status'
          className='mt-2'
        >
          Betöltés…
        </p>
      )}
      {status === 'error' && (
        <div
          className='mt-2 flex flex-wrap items-center gap-2'
          role='status'
        >
          <p>A feladatok betöltése sikertelen.</p>
          <button
            type='button'
            className='exercise-button'
            onClick={loadExercises}
          >
            Újrapróbálás
          </button>
        </div>
      )}
      {exercises && (
        <ol className='practice-exercises'>
          {exercises.map((exercise, index) => {
            const number = index + 1;
            return (
              <li key={number}>
                <details>
                  <summary>{number}. feladat</summary>
                  <Figures
                    figures={exercise.question}
                    base={base}
                    label={`${number}. feladat`}
                  />
                  {exercise.solution && (
                    <details className='practice-solution'>
                      <summary>Megoldás</summary>
                      <Figures
                        figures={exercise.solution}
                        base={base}
                        label={`${number}. feladat megoldása`}
                      />
                    </details>
                  )}
                </details>
              </li>
            );
          })}
        </ol>
      )}
    </details>
  );
}
