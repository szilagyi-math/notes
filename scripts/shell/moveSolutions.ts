import type { SubjectData } from 'common/types';

export function moveSolutions(subject: SubjectData) {
  if (!subject.practiceMaterial.solutionsDir) {
    return null;
  }

  const solutionsDir = `content/${subject.dir}/${subject.practiceMaterial.solutionsDir}`;

  const script = `echo "Moving solutions in ${subject.dir}"

  for file in ${solutionsDir}/*.pdf; do
    # Get the filename without the extension
    filename=$(basename "$file")

    # Move the file to the solutions directory
    mv "$file" "latex-docs/$filename"
  done
`;

  return script;
}
