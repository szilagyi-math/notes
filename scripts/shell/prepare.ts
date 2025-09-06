function loop(dir: string): string {
  return `echo "Changing \\today to the last modification date in the practice files in ${dir}"

  cd ${dir}

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
    if [[ "$OSTYPE" == "darwin"* ]]; then
      sed -i '' "s/\\\\\\today/$hungarian_date/g" $file
    else
      echo "Changing the date in $file"
      git log -1 --format="%ad" -- "$file"
      sed -i "s/\\\\\\today/$hungarian_date/g" $file
    fi
  done

  cd $CWD
`;
}

export function createPreparationScript(...dirs: string[]): string {
  const docsDir = `latex-docs`;

  return `# This script prepares the environment for the compilation of latex files
  
echo "Preparing the environment for the compilation of latex files"
echo "Creating the directory for the compiled files"

mkdir -p ${docsDir}

echo "Saving the current directory"
CWD=$(pwd)

# This only runs on GitHub Actions
if [ "$GITHUB_ACTIONS" == "true" ]; then
  echo "Adding safe directory"
  git config --global --add safe.directory /__w/notes/notes

  echo 'Changing \\today to the last modification date in the practice files'

  ${dirs.map(loop).join('\n')}
fi
`;
}
