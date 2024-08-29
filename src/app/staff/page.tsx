import type { NextPage } from 'next';

interface StaffPageProps {}

const StaffPage: NextPage<StaffPageProps> = () => {
  return (
    <>
      <h1 className='text-3xl font-semibold mt-8 border-b-2 pb-2 mx-4'>
        Munkatársak
      </h1>
    </>
  );
};

export default StaffPage;
