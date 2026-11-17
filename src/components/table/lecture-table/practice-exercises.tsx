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
  const [exercises, setExercises] = useState<Exercise[]>();
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');

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
      {exercises && (
        <ol className='practice-exercises'>
          {exercises.map((exercise, index) => {
            const number = index + 1;
            return (
              <li key={number}>
                <details>
                  <summary>{number}. feladat</summary>
                  <ExerciseContent html={exercise.question} />
                  {exercise.solution && (
                    <details className='practice-solution'>
                      <summary>Megoldás</summary>
                      <ExerciseContent html={exercise.solution} />
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
