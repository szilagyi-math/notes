import type { SubjectData } from 'common/types';

export function moveSolutions(subject: SubjectData) {
  if (!subject.practiceMaterial.solutionsDir) {
    return null;
  }

  const solutionsDir = `content/${subject.dir}/${subject.practiceMaterial.solutionsDir}`;

  const script = `echo "Moving solutions in ${subject.dir}"

if ls ${solutionsDir}/*.pdf 1> /dev/null 2>&1; then
  for file in ${solutionsDir}/*.pdf; do
    # Get the filename without the extension
    filename=$(basename "$file")

    # Copy the file to the solutions directory
    cp "$file" "latex-docs/$filename"
  done
else
  echo "No PDF files found in ${solutionsDir}"
fi
`;

  return script;
}
