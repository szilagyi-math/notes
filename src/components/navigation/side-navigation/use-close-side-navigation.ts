import * as React from 'react';

import { useElementById } from '@/hooks';
import { useSetAtom } from 'jotai';
import { getAtom, getTriggerId } from './utils';

import type { Position } from './utils';

const useCloseSideNavigation = (pos: Position) => {
  const setIsOpen = useSetAtom(getAtom(pos));
  const triggerRef = useElementById(getTriggerId(pos));

  return React.useCallback(
    () => {
      setIsOpen(false);
      triggerRef.current?.focus();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
};

type UseCloseSideNavigationFnReturn = ReturnType<typeof useCloseSideNavigation>;

export { useCloseSideNavigation };

export type { UseCloseSideNavigationFnReturn };
