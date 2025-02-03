'use client';

import { useElementById } from '@/hooks';
import { rightAsideOpen } from '@/store';
import clsx from 'clsx';
import { useSetAtom } from 'jotai';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { useMedia } from 'react-use';
import { getTriggerId } from '../side-navigation';

interface NotesLocalTocProps {
  items: Array<{
    type: 'definition' | 'theorem' | 'heading';
    title: string;
    id: string;
  }>;
}

const NotesLocalToc = ({ items }: NotesLocalTocProps) => {
  console.log(items);

  const setOpen = useSetAtom(rightAsideOpen);

  const ids = useMemo(
    () => items.map(item => item.id),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const isVisible = useMedia('(min-width: 1200px)');
  const activeIndex = useScrollSpy(ids, isVisible);

  const [{ top, height }, set] = useState({
    height: 0,
    top: 0,
  });
  const liRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const element = liRef.current;
    if (activeIndex === -1) {
      set({ height: 0, top: 0 });
      return;
    }

    if (!element) return;

    const { offsetTop, offsetHeight } = element;

    set({ height: offsetHeight, top: offsetTop });
  }, [activeIndex]);

  const triggerRef = useElementById(getTriggerId('right'));

  const handleClose = useCallback(
    () => {
      flushSync(() => {
        setOpen(false);
      });
      triggerRef.current?.focus();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <>
      {/* Animated active line */}
      <div
        className='absolute left-2 border-l-2 border-accent-9 transition-all duration-300'
        style={{
          transform: `translateY(${top}px)`,
          visibility: activeIndex === -1 ? 'hidden' : 'visible',
          height,
        }}
      />
      <ul className='pr-4'>
        {items.map(({ title, id }, i) => (
          <li
            key={id}
            className='flex items-center border-l-2 py-1'
            ref={i === activeIndex ? liRef : null}
          >
            <a
              onClick={handleClose}
              href={`#${id}`}
              className={clsx(
                activeIndex === i ? 'text-primary-fg' : 'text-secondary-fg', //
                'pl-2 ml-2 hover:text-primary-fg transition-colors',
              )}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

const useScrollSpy = (ids: string[], isMobile?: boolean) => {
  const top = isMobile ? 74 : 133;

  const getActiveIndex = useCallback(
    (ids: string[]) => {
      for (let i = ids.length - 1; i >= 0; i--) {
        const element = document.getElementById(ids[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= top) {
            return i;
          }
        }
      }

      return -1;
    },
    [top],
  );

  const [activeIndex, setActiveIndex] = useState<number>(-1);

  useEffect(
    () => {
      const handleScroll = () => {
        setActiveIndex(getActiveIndex(ids));
      };

      handleScroll();
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ids],
  );

  return activeIndex;
};

export { NotesLocalToc };

export type { NotesLocalTocProps };
