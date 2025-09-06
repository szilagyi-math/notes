export function getOutputFilename(input: string): string {
  return input.replace(/\.tex$/, '.pdf');
}
