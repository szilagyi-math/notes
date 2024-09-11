import * as React from 'react';

const useElementById = (id: string) => {
  const ref = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    ref.current = document.getElementById(id);
  }, [id]);

  return ref;
};

export { useElementById };
