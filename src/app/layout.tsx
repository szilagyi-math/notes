import 'katex/dist/katex.min.css';
import '@/styles/globals.css';

import { Footer } from '@/components';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='hu'>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
