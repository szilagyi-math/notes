import type { Subject, SubjectData } from 'common/types';

function handleSubjectData(subject: SubjectData) {
  const docsDir = `latex-docs`;

  const script = `#Now compiling files in ${subject.dir}

# Create the directory for the compiled files
mkdir -p ${docsDir}

# Save the current directory
CWD=$(pwd)

# Change to the book directory
cd content/${subject.dir}/${subject.book.dir}

# Run latexmk with the config file
latexmk -r ../../../.latexmkrc ${subject.book.source}

# Add safe dir
git config --global --add safe.directory /__w/notes/notes

# Copy the book to the ${docsDir} directory
cp ${subject.buildDir}/${subject.book.source.replace(
    /\.tex$/,
    '.pdf'
  )} $CWD/${docsDir}/${subject.book.target}.pdf

# Change to the practice directory
cd ../${subject.practiceMaterial.dir}

# Change today to the last updated date
for file in $(find . -name "*.tex"); do
  # Get the year, month (number), and day
  year=$(git log -1 --format="%ad" --date=format:"%Y" -- "$file")
  month_num=$(git log -1 --format="%ad" --date=format:"%m" -- "$file")
  day=$(git log -1 --format="%ad" --date=format:"%d" -- "$file")
  
  # Map month numbers to Hungarian names
  case "$month_num" in
    "01") month="január";;
    "02") month="február";;
    "03") month="március";;
    "04") month="április";;
    "05") month="május";;
    "06") month="június";;
    "07") month="július";;
    "08") month="augusztus";;
    "09") month="szeptember";;
    "10") month="október";;
    "11") month="november";;
    "12") month="december";;
  esac
  
  # Format the final Hungarian date
  hungarian_date="$year. $month $day."

  # Use sed to replace today with the last modification date
  sed -i "s/\\\\\\today/$hungarian_date/g" $file
done


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
