import * as React from 'react';

const useFocus = <TTarget extends HTMLElement, TTrigger extends HTMLElement>(
  target: React.RefObject<TTarget>,
  trigger: React.RefObject<TTrigger>
) => {
  const grabFocus = React.useCallback(
    (options?: FocusOptions) => {
      target.current?.focus(options);
    },
    [target]
  );

  const releaseFocus = React.useCallback(
    (options?: FocusOptions) => {
      trigger.current?.focus(options);
    },
    [trigger]
  );

  return {
    grabFocus,
    releaseFocus,
  };
};

export { useFocus };
