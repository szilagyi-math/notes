import * as React from 'react';

const useIsomorphicEffect =
  typeof window === 'undefined' ? React.useEffect : React.useLayoutEffect;

export { useIsomorphicEffect };
