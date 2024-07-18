import { JotaiProvider } from './jotai-provider';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <JotaiProvider>{children}</JotaiProvider>;
};

export { Providers };
