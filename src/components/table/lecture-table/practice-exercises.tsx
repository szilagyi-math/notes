'use client';

import { useState } from 'react';

type Exercise = {
  question: string;
  solution?: string;
};

function ExerciseContent({ html }: { html: string }) {
  return (
    <div
      className='exercise-content prose prose-sm max-w-none'
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export function PracticeExercises({
  worksheet,
  count,
}: {
  worksheet: string;
  count: number;
}) {
  const [selected, setSelected] = useState(0);
  const [exercises, setExercises] = useState<Exercise[]>();
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');

  const exercise = exercises?.[selected];

  async function loadExercises() {
    if (exercises || status === 'loading') return;
    setStatus('loading');

    try {
      const response = await fetch(`/static/practice/${worksheet}/index.json`);
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
      {exercises && exercise && (
        <div className='mt-3'>
          <label className='flex flex-wrap items-center gap-2 text-sm font-medium'>
            Feladat kiválasztása
            <select
              className='exercise-button bg-secondary-bg'
              value={selected}
              onChange={event => setSelected(Number(event.currentTarget.value))}
            >
              {exercises.map((_, index) => (
                <option
                  key={index}
                  value={index}
                >
                  {index + 1}. feladat
                </option>
              ))}
            </select>
          </label>
          <div
            key={selected}
            className='mt-3'
          >
            <ExerciseContent html={exercise.question} />
            {exercise.solution && (
              <details className='practice-solution'>
                <summary>Megoldás</summary>
                <ExerciseContent html={exercise.solution} />
              </details>
            )}
          </div>
        </div>
      )}
    </details>
  );
}
