import * as runtime from 'react/jsx-runtime';

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
  return <Component />;
};

export { MDXContent };

export type { MDXContentProps };
