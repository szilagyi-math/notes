import * as React from 'react';

const useOutsideClick = <TElement extends HTMLElement>(
  ref: React.RefObject<TElement>,
  cb: (e: MouseEvent) => void,
  enabled = true
) => {
  React.useEffect(() => {
    if (!enabled) return;

    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        if (e.button === 2 || e.ctrlKey) return;

        cb(e);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [enabled, ref, cb]);
};

export { useOutsideClick };
