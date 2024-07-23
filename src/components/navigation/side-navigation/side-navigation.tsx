'use client';

import clsx from 'clsx';
import Trap from 'focus-trap-react';
import { XIcon } from 'lucide-react';
import * as React from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import { useSideNavigation } from './use-side-navigation';

import {
  getCloseButtonId,
  getDescriptionId,
  getScrollableId,
  getTitleId,
  type Breakpoint,
  type Position,
} from './utils';

interface SideNavigationProps {
  children?: React.ReactNode;
  breakpoint: Breakpoint;
  position: Position;

  containerClassName?: string;
  titleClassName?: string;
  scrollableClassName?: string;
  closeButtonClassName?: string;

  scrollableAs?: React.ElementType;

  title: string;
  description: string;
}

const SideNavigation = ({
  children,
  breakpoint,
  position,

  containerClassName,
  titleClassName,
  scrollableClassName,
  closeButtonClassName,

  scrollableAs,

  title,
  description,
}: SideNavigationProps) => {
  const { isOpen, contentRef, contentProps, handleClose } = useSideNavigation(
    position,
    breakpoint
  );

  const Scrollable = scrollableAs || 'div';

  return (
    <Trap
      active={isOpen}
      focusTrapOptions={{
        allowOutsideClick: true,
      }}
    >
      <RemoveScroll
        allowPinchZoom
        enabled={isOpen}
        ref={contentRef}
        className={clsx('side-nav', containerClassName)}
        {...contentProps}
      >
        <button
          type='button'
          id={getCloseButtonId(position)} //
          className={clsx('side-nav-close-button', closeButtonClassName)}
          onClick={handleClose}
        >
          <XIcon />
          <span className='sr-only'>Bezárás</span>
        </button>
        <h2
          id={getTitleId(position)} //
          className={clsx('side-nav-title', titleClassName)}
        >
          {title}
        </h2>
        <p
          id={getDescriptionId(position)} //
          className='sr-only'
        >
          {description}
        </p>
        <Scrollable
          id={getScrollableId(position)} //
          className={clsx('side-nav-scrollable', scrollableClassName)}
        >
          {children}
        </Scrollable>
      </RemoveScroll>
    </Trap>
  );
};

export { SideNavigation };

export type { SideNavigationProps };
