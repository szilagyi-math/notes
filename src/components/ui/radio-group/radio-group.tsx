'use client';

import * as LabelPrimitive from '@radix-ui/react-label';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as React from 'react';

import { clsx } from 'clsx';
import { Circle } from 'lucide-react';

type RadioItem = {
  value: any;
  label: string;
};

interface RadioGroupItemProps
  extends React.ComponentProps<typeof RadioGroupPrimitive.Item> {
  label: string;
  value: string;

  containerClassName?: string;
  labelClassName?: string;
  indicatorClassName?: string;
}

const RadioGroupItem = ({
  label,
  value,
  className,
  containerClassName,
  labelClassName,
  ...props
}: RadioGroupItemProps) => {
  const id = React.useId();

  return (
    <div className={clsx('radio-group-item', containerClassName)}>
      <LabelPrimitive.Root
        className={clsx('radio-group-item-label', labelClassName)}
        htmlFor={id}
      >
        {label}{' '}
      </LabelPrimitive.Root>
      <RadioGroupPrimitive.Item
        id={id}
        value={value}
        className={clsx('radio-group-item-button', className)}
        {...props}
      >
        <RadioGroupPrimitive.Indicator
          className={clsx('radio-group-item-indicator')}
        >
          <Circle />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
    </div>
  );
};

type RadioGroupPrimitiveProps = React.ComponentProps<
  typeof RadioGroupPrimitive.Root
>;

interface RadioGroupProps extends Omit<RadioGroupPrimitiveProps, 'children'> {
  items: RadioItem[];
  align?: 'left' | 'right';
  spacing?: 'none' | 'between';

  containerClassName?: string;
  labelClassName?: string;
  indicatorClassName?: string;
}

const RadioGroup = ({
  className,
  items,
  align = 'left',
  spacing = 'none',

  ...props
}: RadioGroupProps) => {
  return (
    <RadioGroupPrimitive.Root
      data-align={align}
      data-spacing={spacing}
      className={clsx('radio-group', className)}
      {...props}
    >
      {items.map(item => (
        <RadioGroupItem
          key={item.value}
          {...item}
        />
      ))}
    </RadioGroupPrimitive.Root>
  );
};

const Primitive = RadioGroupPrimitive.Root;

export { RadioGroup, RadioGroupItem, Primitive as RadioGroupPrimitive };

export type {
  RadioGroupItemProps,
  RadioGroupPrimitiveProps,
  RadioGroupProps,
  RadioItem,
};
