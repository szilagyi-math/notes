import type { Subject, SubjectData } from 'common/types';

function handleSubjectData(data: SubjectData) {
  const absoluteBookDir = `${data.absoluteDir}/${data.book.dir}`;
  const absolutePracticeDir = `${data.absoluteDir}/${data.practiceMaterial.dir}`;

  const script = `Now compiling files in ${data.dir}

# Save the current directory
CWD=$(pwd)

# Change to the book directory
cd ${absoluteBookDir}

# Run latexmk with the config file
latexmk -r ${data.rcFile} ${data.book.source}

# Create a downloads directory in cwd if it doesn't exist
mkdir -p $CWD/.downloads

# Copy the book to the downloads directory
cp ${data.buildDir}/${data.book.source.replace(
    /\.tex$/,
    '.pdf'
  )} $CWD/.downloads/${data.book.target}.pdf

# Change to the practice directory
cd ${absolutePracticeDir}

# Run latexmk with the config file and copy the files to the downloads directory
${data.practiceMaterial.files
  .map(file => {
    if (file.displayName && file.source && file.target) {
      return `latexmk -r ${data.rcFile} ${file.source}
cp ${data.buildDir}/${file.source.replace(/\.tex$/, '.pdf')} $CWD/.downloads/${
        file.target
      }.pdf`;
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
