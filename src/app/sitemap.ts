import { mathNotes } from 'content';
import { data } from 'latex-docs';

import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE_URL = 'https://szilagyi-math.hu';

export default function sitemap(): MetadataRoute.Sitemap {
  const subjects = Object.keys(data) as (keyof typeof data)[];

  return [
    // HOMEPAGE
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
    },
    // DOWNLOADS PAGE
    {
      url: `${BASE_URL}/downloads`,
      lastModified: new Date(),
      changeFrequency: 'daily',
    },
    // PDF FILES
    ...subjects
      .map(s => {
        const d = data[s];

        return [
          // Book
          d.downloads.book &&
            ({
              url: `${BASE_URL}/downloads/${data[s].downloads.book.fileName}`,
              lastModified: new Date(),
              changeFrequency: 'daily',
            } as const),
          // Practicals
          ...(d.downloads.practice &&
            d.downloads.practice.map(
              p =>
                ({
                  url: `${BASE_URL}/downloads/${p.fileName}`,
                  lastModified: new Date(),
                  changeFrequency: 'daily',
                }) as const,
            )),
        ];
      })
      .flat(),
    // DETAILED SUBJECTS
    ...subjects.map(
      code =>
        ({
          url: `${BASE_URL}/subjects/${code}`,
          lastModified: new Date(),
          changeFrequency: 'daily',
        }) as const,
    ),
    // ONLINE NOTES
    ...mathNotes.map(
      note =>
        ({
          url: BASE_URL + note.href,
          lastModified: new Date(),
          changeFrequency: 'daily',
        }) as const,
    ),
  ];
}
