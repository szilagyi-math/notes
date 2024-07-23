'use client';

import { leftAsideOpen, rightAsideOpen } from '@/store';
import { useAtomValue } from 'jotai';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const SideNavigationBackdrop = () => {
  const left = useAtomValue(leftAsideOpen);
  const right = useAtomValue(rightAsideOpen);

  const open = left || right;

  const [debounced, setDebounced] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setDebounced(open);
    }, 200);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [open]);

  const shouldRender = debounced || open;

  if (!shouldRender) {
    return null;
  }

  return createPortal(
    <div
      data-state-fadein={open && !debounced ? '' : undefined}
      data-state-open={shouldRender ? '' : undefined}
      data-state-fadeout={!open && debounced ? '' : undefined}
      aria-hidden='true'
      className='side-nav-backdrop'
    />,
    document.body
  );
};

export { SideNavigationBackdrop };
