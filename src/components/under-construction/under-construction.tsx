import * as React from 'react';

interface UnderConstructionProps {}

const UnderConstruction = () => {
  return (
    <div className='w-full h-[calc(100vh-56px)] flex flex-col items-center justify-center px-4'>
      <div className='flex items-center text-xl'>
        <span className='mr-4 text-3xl md:min-w-24 w-8'>🚧🚧🚧</span>
        <p className='text-center'>
          Az oldal jelenleg fejlesztés alatt áll. Kérlek, látogass vissza
          később!
        </p>
        <span className='ml-4 text-3xl md:min-w-24 w-8'>🚧🚧🚧</span>
      </div>
    </div>
  );
};

export { UnderConstruction };

export type { UnderConstructionProps };
