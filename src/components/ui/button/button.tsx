import clsx from 'clsx';
import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';

type ButtonElement = React.ElementRef<'button'>;
interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  size?: 'sm' | 'md' | 'lg';
  appearance?: 'solid' | 'soft' | 'outline' | 'ghost' | 'glow';
  asChild?: boolean;
}

const Button = React.forwardRef<ButtonElement, ButtonProps>(
  (
    { className, asChild, size = 'md', appearance = 'solid', ...props },
    forwardedRef
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={forwardedRef}
        className={clsx('btn', className)}
        data-size={size}
        data-appearance={appearance}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };

export type { ButtonProps };
