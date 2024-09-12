import type { SubjectData } from 'common/types';

// TODO: Unhardcode the paths as well the .latexmkrc.prod file
export function createCompileScript(subject: SubjectData) {
  const docsDir = `latex-docs`;

  const script = `echo "Now compiling files in ${subject.dir}"

# "Change to the book directory"
cd content/${subject.dir}/${subject.book.dir}

# Run latexmk with the config file
latexmk -r ../../../.latexmkrc.prod ${subject.book.source}

# Copy the book to the ${docsDir} directory
cp ${subject.buildDir}/${subject.book.source.replace(
    /\.tex$/,
    '.pdf'
  )} $CWD/${docsDir}/${subject.book.target}.pdf

# Change to the practice directory
cd ../${subject.practiceMaterial.dir}

# Run latexmk with the config file and copy the files to the ${docsDir} directory
${subject.practiceMaterial.files
  .map(file => {
    if (file.displayName && file.source && file.target) {
      return `latexmk -r ../../../.latexmkrc.prod ${file.source}
cp ${subject.buildDir}/${file.source.replace(
        /\.tex$/,
        '.pdf'
      )} $CWD/${docsDir}/${file.target}.pdf`;
    } else {
      return `echo 'Skipping ${file.description}'`;
    }
  })
  .join('\n\n')}

# Finish by returning to the original directory
cd $CWD

echo "Finished compiling files in ${subject.dir}"
`;

  return script;
}
