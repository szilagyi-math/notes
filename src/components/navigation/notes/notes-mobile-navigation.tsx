'use client';

import { clsx } from 'clsx';
import { useSideNavigationTrigger } from '../side-navigation';

import type { Breakpoint } from '../side-navigation/utils';

interface NotesMobileNavigationProps {
  showRight?: boolean;
  leftBreakpoint: Breakpoint;
  rightBreakpoint: Breakpoint;
}

const breakpointMap: Record<Breakpoint, `${Breakpoint}:hidden`> = {
  md: 'md:hidden',
  lg: 'lg:hidden',
  xl: 'xl:hidden',
} as const;

const LeftTrigger = ({ breakPoint }: { breakPoint: Breakpoint }) => {
  const { triggerRef, triggerProps } = useSideNavigationTrigger('left');

  return (
    <button
      ref={triggerRef}
      className={`ml-4 ${breakpointMap[breakPoint]} text-accent-11 font-bold`}
      {...triggerProps}
    >
      {'Menü >'}
    </button>
  );
};

const RightTrigger = ({ breakPoint }: { breakPoint: Breakpoint }) => {
  const { triggerRef, triggerProps } = useSideNavigationTrigger('right');

  return (
    <button
      ref={triggerRef}
      className={`mr-4 ${breakpointMap[breakPoint]} ml-auto text-accent-11 font-bold`}
      {...triggerProps}
    >
      {'< Tartalomjegyzék'}
    </button>
  );
};

const NotesMobileNavigation = ({
  showRight,
  leftBreakpoint,
  rightBreakpoint,
}: NotesMobileNavigationProps) => {
  return (
    <div
      className={clsx(
        'sticky border-b-2 z-10 h-nav-height flex items-center bg-secondary-bg w-full top-[56px]',
        breakpointMap[showRight ? rightBreakpoint : leftBreakpoint],
      )}
    >
      <LeftTrigger breakPoint={leftBreakpoint} />
      {showRight && <RightTrigger breakPoint={rightBreakpoint} />}
    </div>
  );
};

export { NotesMobileNavigation };

export type { NotesMobileNavigationProps };
