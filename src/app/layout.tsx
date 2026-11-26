import 'katex/dist/katex.min.css';
import '@/styles/globals.css';

import { Footer, Header, Main } from '@/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://szilagyi-math.hu'),
  description: 'Magyar nyelvű egyetemi matematika jegyzetek, gyakorlófeladatok és megoldások a G1, G2 és G3 tárgyakhoz.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='hu' data-scroll-behavior='smooth'>
      <body>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
