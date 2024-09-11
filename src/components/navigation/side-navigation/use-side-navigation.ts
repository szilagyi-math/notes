import {
  useElementById,
  useEscape,
  useFocus,
  useIsomorphicEffect,
  useOutsideClick,
} from '@/hooks';
import { useAtom } from 'jotai';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useMedia } from 'react-use';
import {
  breakpointMap,
  getAtom,
  getCloseButtonId,
  getContentId,
  getDescriptionId,
  getTitleId,
  getTriggerId,
} from './utils';

import type { Breakpoint, Position } from './utils';

const useSideNavigation = <TContent extends HTMLElement = HTMLDivElement>(
  pos: Position,
  breakpoint: Breakpoint
) => {
  const [isOpen, setIsOpen] = useAtom(getAtom(pos));

  const contentRef = React.useRef<TContent>(null);
  const closeButtonRef = useElementById(getCloseButtonId(pos));
  const triggerRef = useElementById(getTriggerId(pos));

  const { grabFocus, releaseFocus } = useFocus(closeButtonRef, triggerRef);

  const isDesktop = useMedia(
    `(min-width: ${breakpointMap[breakpoint]}px)`,
    false
  );

  const handleOpen = React.useCallback(
    (preventFocus?: boolean) => {
      ReactDOM.flushSync(() => {
        setIsOpen(true);
      });

      if (preventFocus) return;

      grabFocus();
    },
    [grabFocus, setIsOpen]
  );

  const handleClose = React.useCallback(() => {
    ReactDOM.flushSync(() => {
      setIsOpen(false);
    });

    releaseFocus();
  }, [releaseFocus, setIsOpen]);

  useIsomorphicEffect(() => {
    setIsOpen(false);
  }, [isDesktop]);

  useOutsideClick(contentRef, handleClose, isOpen);

  useEscape(handleClose, isOpen);

  const hidden = !isOpen && !isDesktop;
  const isDialog = isOpen && !isDesktop;

  const contentProps: React.HTMLAttributes<TContent> = React.useMemo(() => {
    return {
      id: getContentId(pos),
      role: isDialog ? 'dialog' : undefined,
      'data-breakpoint': breakpoint,
      'data-position': pos,
      'data-state-open': isOpen ? '' : undefined,
      'aria-hidden': hidden,
      'aria-labelledby': getTitleId(pos),
      'aria-describedby': getDescriptionId(pos),
    };
  }, [isOpen, hidden, isDialog, pos, breakpoint]);

  return {
    isOpen,
    contentRef,
    contentProps,
    handleOpen,
    handleClose,
  };
};

type UseSideNavigationFnReturn<TContent extends HTMLElement> = ReturnType<
  typeof useSideNavigation<TContent>
>;

export { useSideNavigation };

export type { UseSideNavigationFnReturn };
