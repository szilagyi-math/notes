import type { Metadata, NextPage } from 'next';

import SubjectsPageLogic from './SubjectsPage';

export const metadata: Metadata = {
  title: 'Tantárgyak | Szilágyi Brigitta weboldala',
  description: `Itt megtalálhatóak a legfrissebb híreket, bejegyzéseket, és a főbb tantárgyakat.`,
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

const SubjectsPage: NextPage = () => {
  return <SubjectsPageLogic />;
};

export default SubjectsPage;
