import Link from 'next/link';
import type { Metadata } from 'next';
import { data } from 'latex-docs';

export const metadata: Metadata = {
  title: 'Teljes előadásjegyzet | Matematika G1',
};

export default function G1TextbookPage() {
  const pdf = `/downloads/${data.G1.downloads.book.fileName}`;

  return (
    <section className='course-page px-4'>
      <nav
        className='mt-6 flex flex-wrap gap-4'
        aria-label='Előadásjegyzet'
      >
        <Link
          className='underline'
          href='/subjects/G1'
        >
          Matematika G1
        </Link>
        {data.G1.onlineNotes && (
          <Link
            className='underline'
            href={data.G1.onlineNotes}
          >
            Webes fejezetek
          </Link>
        )}
      </nav>
      <h1 className='page-title'>Teljes G1 előadásjegyzet</h1>
      <p className='my-3'>
        A tankönyv minden oldala, az ábrákkal és a jelölések gyűjteményével.
      </p>
      <a
        className='mb-4 inline-block underline'
        href={pdf}
      >
        A teljes tankönyv megnyitása (PDF)
      </a>
      <iframe
        className='pdf-preview'
        title='Matematika G1 – teljes előadásjegyzet'
        src={pdf}
      />
    </section>
  );
}
