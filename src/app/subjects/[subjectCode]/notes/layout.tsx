import {
  NotesGlobalToc,
  SideNavigation,
  SideNavigationBackdrop,
} from '@/components';
import { isSubject } from '@/utils';
import toc from '@/lib/toc/math-notes';

const NotesLayout = async (
  props: LayoutProps<'/subjects/[subjectCode]/notes'>,
) => {
  const { children } = props;
  const { subjectCode } = await props.params;

  if (!isSubject(subjectCode)) {
    throw new Error('Invalid subject code');
  }

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
