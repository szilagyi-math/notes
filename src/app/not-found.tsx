import { GameOfLife } from '@/components';

import type { NextPage, Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 | Szilágyi Brigitta weboldala',
  description: `A keresett oldal nem található.`,
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
  return <GameOfLife />;
};

export default NotFound;
