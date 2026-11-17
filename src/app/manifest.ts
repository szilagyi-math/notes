import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Szilágyi Brigitta Weboldala',
    short_name: 'Szilágyi Brigitta Weboldala',
    description: 'Szilágyi Brigitta Weboldala',
    background_color: '#F9F8F8',
    theme_color: '#8A2332',
    categories: ['education', 'mathematics', 'science', 'BME'],
    dir: 'ltr',
    lang: 'hu-HU',
    start_url: '/',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
