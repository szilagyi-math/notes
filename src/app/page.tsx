import SubjectsPage from './subjects/SubjectsPage';

import type { NextPage, Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Főoldal | Szilágyi Brigitta weboldala',
  description: `Itt megtalálhatóak a tanárnő által oktatott tárgyak listája, valamint a hozzájuk tartozó információk.`,
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
  return <SubjectsPage />;
};

export default NotFound;
