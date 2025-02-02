import { EdubaseQR, Main } from '@/components';

import type { NextPage } from 'next';

interface EdubaseQRPageProps {}

const EdubaseQRPage: NextPage<EdubaseQRPageProps> = () => {
  return (
    <Main>
      <EdubaseQR />
    </Main>
  );
};

export default EdubaseQRPage;
