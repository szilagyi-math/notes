import toc from '@/lib/toc/math-notes';
import { Main } from '@/components';

import type { Subject } from 'common/types';
import Link from 'next/link';

interface NotesLayoutParams {
  subjectCode: Subject;
}

interface NotesLayoutProps {
  children: React.ReactNode;
  params: Promise<NotesLayoutParams>;
}

const NotesLayout = async (props: NotesLayoutProps) => {
  const params = await props.params;

  const {
    children
  } = props;

  const subjectToc = toc[params.subjectCode];

  return (
    <Main>
      <pre>{JSON.stringify(toc[params.subjectCode], null, 2)}</pre>
      {subjectToc.map(item => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <ul>
            {item.subItems.map(subItem => (
              <li key={subItem.id}>
                <Link href={subItem.href}>{subItem.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {children}
    </Main>
  );
};

export default NotesLayout;
