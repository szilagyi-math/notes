/**
 * The worksheets place numbered exercises in top-level lists under
 * “Feladatok” (or in an unheaded list on exercise-only sheets).
 */
export function findPracticeExercises(source: string) {
  const lines = source.split(/\r?\n/);
  const uncomment = (line: string) => line.replace(/(?<!\\)%.*$/, '');
  const heading = /^\\(?:subsection|section)\*?\{([^}]+)\}/;
  const hasHeadings = lines.some(line => heading.test(uncomment(line).trim()));
  const environments: string[] = [];
  let inExercises = !hasHeadings;
  const exercises: number[] = [];

  for (const [index, raw] of lines.entries()) {
    const line = uncomment(raw).trim();
    const section = heading.exec(line);
    if (section) inExercises = /feladatok/i.test(section[1]);

    if (
      inExercises &&
      environments.join('/') === 'document/enumerate' &&
      /^\\item(?=\s|\[|$)/.test(line)
    ) {
      exercises.push(index + 1);
    }

    for (const [, action, environment] of line.matchAll(
      /\\(begin|end)\{([^}]+)\}/g,
    )) {
      if (action === 'begin') environments.push(environment);
      else if (environments.at(-1) === environment) environments.pop();
    }
  }

  return exercises;
}
