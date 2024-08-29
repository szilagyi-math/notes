import * as LabelPrimitive from '@radix-ui/react-label';
import * as React from 'react';

import { clsx } from 'clsx';

interface LabelProps extends React.ComponentProps<typeof LabelPrimitive.Root> {}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, ...props }, ref) => {
  return (
    <LabelPrimitive.Root
      ref={ref}
      className={clsx('label', className)}
      {...props}
    />
  );
});

Label.displayName = 'Label';

export { Label };

export type { LabelProps };
