import {
  NotesGlobalToc,
  SideNavigation,
  SideNavigationBackdrop,
} from '@/components';
import toc from '@/lib/toc/analysis-notes';

import type { Subject } from 'mdx/types';

export const generateStaticParams = () => {
  return [
    {
      subject: 'G1',
    },
  ];
};

interface NotesLayoutProps {
  children: React.ReactNode;
  params: {
    subject: Subject;
  };
}

const NotesLayout = ({ children, params }: NotesLayoutProps) => {
  return (
    <div className='max-w-content-width mx-auto my-0 flex'>
      <SideNavigation
        breakpoint='md'
        position='left'
        title='Matematika G1'
        description='A tárgyhoz tartozó jegyzet fejezetei és alfejezetei'
      >
        <NotesGlobalToc items={toc[params.subject]} />
      </SideNavigation>
      <SideNavigationBackdrop />
      {children}
    </div>
  );
};

export default NotesLayout;
