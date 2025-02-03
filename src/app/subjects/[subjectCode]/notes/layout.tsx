import {
  NotesGlobalToc,
  SideNavigation,
  SideNavigationBackdrop,
} from '@/components';
import toc from '@/lib/toc/math-notes';

import type { Subject } from 'common/types';

interface NotesLayoutParams {
  subjectCode: Subject;
}

interface NotesLayoutProps {
  children: React.ReactNode;
  params: Promise<NotesLayoutParams>;
}

const NotesLayout = async (props: NotesLayoutProps) => {
  const { children } = props;
  const { subjectCode } = await props.params;

  return (
    <div className='max-w-content-width mx-auto my-0 flex'>
      <SideNavigation
        breakpoint='md'
        position='left'
        title={`Matematika ${subjectCode}`}
        description='A tárgyhoz tartozó jegyzet fejezetei és alfejezetei'
      >
        <NotesGlobalToc items={toc[subjectCode]} />
      </SideNavigation>
      <SideNavigationBackdrop />
      {children}
    </div>
  );
};

export default NotesLayout;
