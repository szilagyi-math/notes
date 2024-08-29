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
  return (
    <Component
      components={{
        // TODO: Create these components
        Definition: (props: any) => <div {...props} />,
        Theorem: (props: any) => <div {...props} />,
        Proof: (props: any) => <div {...props} />,
        Example: (props: any) => <div {...props} />,
        Note: (props: any) => <div {...props} />,
        Statement: (props: any) => <div {...props} />,
      }}
    />
  );
};

export { MDXContent };

export type { MDXContentProps };
