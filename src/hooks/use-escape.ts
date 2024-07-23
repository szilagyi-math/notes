import * as React from 'react';

const useEscape = (cb: (e: KeyboardEvent) => void, enabled = true) => {
  React.useEffect(() => {
    if (!enabled) return;

    const handlePress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        cb(e);
      }
    };

    document.addEventListener('keydown', handlePress);

    return () => {
      document.removeEventListener('keydown', handlePress);
    };
  }, [enabled, cb]);
};

export { useEscape };
