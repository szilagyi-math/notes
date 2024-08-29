import clsx from 'clsx';
import * as React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx('input form-field', className)}
        type={type}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export { Input };

export type { InputProps };
