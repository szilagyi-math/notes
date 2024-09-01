import 'katex/dist/katex.min.css';
import '@/styles/globals.css';

import { Footer, Header, Main } from '@/components';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='hu'>
      <body>
        {/* <Header /> */}
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
