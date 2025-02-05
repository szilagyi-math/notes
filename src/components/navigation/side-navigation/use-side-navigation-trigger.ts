import { useElementById, useFocus } from '@/hooks';
import { useAtom } from 'jotai';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getAtom, getCloseButtonId, getContentId, getTriggerId } from './utils';

/**
 * Hook to use the side navigation trigger
 * @param pos The position of the side navigation
 * @returns The trigger props and methods
 *
 * @example
 * ```tsx
 * const LeftTrigger = () => {
 *   const { triggerProps, triggerRef } = useSideNavigationTrigger("left");
 *
 *   return (
 *     <button ref={triggerRef} {...triggerProps}>
 *       Open Left
 *     </button>
 *   )
 * }
 * ```
 */
const useSideNavigationTrigger = <
  TTrigger extends HTMLElement = HTMLButtonElement,
>(
  pos: 'left' | 'right' = 'left',
) => {
  const [isOpen, setIsOpen] = useAtom(getAtom(pos));

  const closeButtonRef = useElementById(getCloseButtonId(pos));
  const triggerRef = React.useRef<TTrigger>(null);

  const { grabFocus, releaseFocus } = useFocus(closeButtonRef, triggerRef);

  const handleOpen = React.useCallback(
    () => {
      ReactDOM.flushSync(() => {
        setIsOpen(true);
      });

      grabFocus();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const handleClose = React.useCallback(
    (preventFocus?: boolean) => {
      ReactDOM.flushSync(() => {
        setIsOpen(false);
      });

      if (preventFocus) return;

      releaseFocus();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const triggerProps: React.HTMLAttributes<TTrigger> = React.useMemo(
    () => ({
      id: getTriggerId(pos),
      onClick: handleOpen,
      'aria-haspopup': 'true',
      'aria-expanded': isOpen,
      'aria-controls': getContentId(pos),
      'data-state-open': isOpen ? '' : undefined,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isOpen],
  );

  return {
    /** The state of the aside */
    isOpen,
    /** The ref that should be passed to the trigger */
    triggerRef,
    /** The props that should be passed to the trigger */
    triggerProps,
    /** Grab the focus of the aside */
    grabFocus,
    /** Grab the focus of the trigger */
    releaseFocus,
    /** Open the aside programatically */
    handleOpen,
    /** Close the aside programatically */
    handleClose,
  };
};

type UseSideNavigationTriggerFnReturn<
  TTrigger extends HTMLElement = HTMLButtonElement,
> = ReturnType<typeof useSideNavigationTrigger<TTrigger>>;

export { useSideNavigationTrigger };

export type { UseSideNavigationTriggerFnReturn };
