import type { Subject, SubjectData } from 'common/types';

function handleSubjectData(subject: SubjectData) {
  const docsDir = `latex-docs`;

  const script = `Now compiling files in ${subject.dir}

# Create the directory for the compiled files
mkdir -p ${docsDir}

# Save the current directory
CWD=$(pwd)

# Change to the book directory
cd content/${subject.dir}/${subject.book.dir}

# Run latexmk with the config file
latexmk -r ../../../.latexmkrc ${subject.book.source}

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
      return `latexmk -r ../../../.latexmkrc ${file.source}
cp ${subject.buildDir}/${file.source.replace(
        /\.tex$/,
        '.pdf'
      )} $CWD/${docsDir}/${file.target}.pdf`;
    } else {
      return `# Skipping ${file.description}`;
    }
  })
  .join('\n\n')}

# Finish by returning to the original directory
cd $CWD
`;

  return script;
}

export function configToBash(mergedConfig: {
  [key in Subject]: SubjectData;
}) {
  const scripts = Object.entries(mergedConfig).map(([, data]) => {
    return handleSubjectData(data);
  });

  return scripts.join('\n\n\n');
}
