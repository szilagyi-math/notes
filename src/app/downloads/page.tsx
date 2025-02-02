import type { NextPage, Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Letöltések | Szilágyi Brigitta weboldala',
  description: `Az oldalon található letölthető tananyagok, jegyzetek, és egyéb segédanyagok.`,
  keywords: [
    'Szilágyi Brigitta',
    'BME',
    'Matematika',
    'Oktatás',
    'Analízis',
    'Matematika G1',
    'Matematika G2',
    'Matematika G3',
    'BMETE94BG01',
    'BMETE94BG02',
    'BMETE94BG03',
    'BMETE94BG04',
  ],
};

const NotFound: NextPage = () => {
  return 'Hello World';
};

export default NotFound;
