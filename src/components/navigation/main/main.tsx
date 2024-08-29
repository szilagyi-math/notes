import * as React from 'react';

interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <main
      id='main'
      className='mx-auto max-w-content-width min-h-content-height'
    >
      {children}
    </main>
  );
};

export { Main };

export type { MainProps };
