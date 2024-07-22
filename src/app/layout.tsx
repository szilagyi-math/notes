import '@/styles/globals.css';

import { Providers } from '@/providers';
import { MainNavigation } from '@/components';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='hu'>
      <body>
        <Providers>
          <MainNavigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}
