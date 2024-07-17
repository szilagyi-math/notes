import type { ParsedConfig } from 'scripts/parser';

export function configToBash(config: ParsedConfig) {
  const script = `echo "Now compiling files in ${config.relative_path}"

# Save the current directory
CWD=$(pwd)

# Change to the directory of the config file
cd ${config.absolute_path}

# Run latexmk with the config file
${config.root_files
  .map(file => {
    return `latexmk -r ${config.relative_rc} -jobname=${file.target} ${file.source}`;
  })
  .join('\n\n')}

# Copy all files to the cwd/build directory
mkdir -p $CWD/build
cd build
cp ./*.pdf $CWD/build
cd ..

# Finish by returning to the original directory
cd $CWD
`;

  return script;
}
