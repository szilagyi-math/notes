import * as runtime from 'react/jsx-runtime';

import type { JSX } from 'react/jsx-runtime';

interface MDXProps {
  components?: Record<string, React.ComponentType>;
}

const getMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default as (props: MDXProps) => JSX.Element;
};

interface MDXContentProps {
  code: string;
}

const MDXContent = ({ code }: MDXContentProps) => {
  const Component = getMDXComponent(code);
  return (
    <Component
      components={{
        UnderConstruction: () => (
          <div className='min-h-[200px] w-full flex flex-col items-center justify-center px-4'>
            <div className='flex items-center text-xl'>
              <span className='mr-4 text-3xl w-8'>🚧🚧🚧</span>
              <p className='text-center'>
                Az oldal jelenleg fejlesztés alatt áll. Kérlek, látogass vissza
                később!
              </p>
              <span className='ml-4 text-3xl w-8'>🚧🚧🚧</span>
            </div>
          </div>
        ),

        // TODO: Create these components
        Definition: (props: any) => {
          const [, chapter, section] = props.id.split('.');

          return (
            <div className='border-l-4 border-red-600 pl-3 pr-2 py-1 bg-secondary-bg/35 my-5 *:last:mb-0 *:first:mt-0 overflow-x-auto'>
              <h4 id={props.id}>
                Definíció {`${chapter}.${section}`}
                {props.title ? ` [ ${props.title} ]` : null}
              </h4>
              {props.children}
            </div>
          );
        },
        Theorem: (props: any) => {
          const [, chapter, section] = props.id.split('.');

          return (
            <div className='border-l-4 border-teal-600 pl-3 pr-2 py-2 bg-secondary-bg/35 my-5 *:last:mb-0 *:first:mt-0 overflow-x-auto'>
              <h4 id={props.id}>
                Tétel {`${chapter}.${section}`}
                {props.title ? ` [ ${props.title} ]` : null}
              </h4>
              {props.children}
            </div>
          );
        },
        Proof: (props: any) => (
          <div className='mt-4 border-t pt-2 *:last:mb-0 *:first:mt-0 overflow-x-auto'>
            <h4>Bizonyítás {props.title ? `[ ${props.title} ]` : null} </h4>
            {props.children}
          </div>
        ),
        BlueBox: (props: any) => (
          <div className='pl-3 pr-2 border-l-4 border-blue-600 py-2 my-5 bg-secondary-bg/35 *:last:mb-0 *:first:mt-0 overflow-x-auto'>
            {props.children}
          </div>
        ),
        Example: (props: any) => (
          // TODO: Create example css class
          <div className='pl-3 pr-2 border-l-4 border-sky-600 py-2 my-5 bg-secondary-bg/35 *:last:mb-0 *:first:mt-0 overflow-x-auto'>
            <h4>Példa</h4>
            {props.children}
          </div>
        ),
        Note: (props: any) => (
          <div className='pl-3 pr-2 border-l-4 border-amber-400 py-2 my-5 bg-secondary-bg/35 *:last:mb-0 *:first:mt-0 overflow-x-auto'>
            <h4>Megjegyzés</h4>
            {props.children}
          </div>
        ),
        Statement: (props: any) => (
          <div className='pl-3 pr-2 border-l-4 border-purple-600 bg-secondary-bg/35 py-2 my-5 *:last:mb-0 *:first:mt-0 overflow-x-auto'>
            <h4>Állítás</h4>
            {props.children}
          </div>
        ),
      }}
    />
  );
};

export { MDXContent };

export type { MDXContentProps };
