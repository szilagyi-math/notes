import type { SubjectData } from 'common/types';

export function movePdfSolutions(subject: SubjectData) {
  if (!subject.practiceMaterial.pdfSolutionsDir) {
    return null;
  }
  if (subject.practiceMaterial.hideSolutions === 'no-copy') {
    return null;
  }

  const solutionsDir = `${subject.absoluteDir}/${subject.practiceMaterial.pdfSolutionsDir}`;
  const targetDir = subject.absoluteTargetDir;

  const filenames = subject.practiceMaterial.files
    .filter(f => f.pdfSolutionSource)
    .map(f => ({
      source: f.pdfSolutionSource!,
      target: f.pdfSolutionTarget || f.pdfSolutionSource!,
    }));

  if (filenames.length === 0) {
    return null;
  }

  let script = `Moving pdf solutions in ${subject.dir}`;

  filenames.forEach(({ source, target }) => {
    script += `
    
if [ -f "${solutionsDir}/${source}" ]; then
  cp "${solutionsDir}/${source}" "${targetDir}/${target}"
else
  echo "Warning: File ${solutionsDir}/${source} does not exist, skipping."
fi`;
  });

  return script;
}
