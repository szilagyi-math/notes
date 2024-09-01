import * as React from 'react';

interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <main
      id='main'
      // TODO: Reconfiguure height once the header is implemented
      className='mx-auto max-w-content-width min-h-screen'
    >
      {children}
    </main>
  );
};

export { Main };

export type { MainProps };
