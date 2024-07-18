import { Providers } from '@/providers';
import '@/styles/globals.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='hu'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
