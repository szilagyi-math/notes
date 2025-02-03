'use client';

import { leftAsideOpen } from '@/store';
import clsx from 'clsx';
import { useSetAtom } from 'jotai';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useEffect } from 'react';

interface NotesGlobalTocProps {
  items: Array<{
    title: string;
    href: string;
    subItems: Array<{
      title: string;
      href: string;
    }>;
  }>;
}

const NotesGlobalToc = ({ items }: NotesGlobalTocProps) => {
  const pathname = usePathname();
  const setIsOpen = useSetAtom(leftAsideOpen);

  useEffect(
    () => {
      setIsOpen(false);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pathname],
  );

  return items.map(item => {
    return (
      <Fragment key={item.href}>
        <Link
          className={clsx(
            'my-2 block',
            item.href === pathname && 'font-bold text-accent-9',
            'hover:text-accent-9 transition-colors',
          )}
          href={item.href}
        >
          {item.title}
        </Link>
        <ul>
          {item.subItems.map(subItem => {
            return (
              <li
                className={clsx(
                  //
                  'border-l-2 py-1 ml-2 pl-2',
                  pathname === subItem.href
                    ? 'text-primary-fg border-accent-9'
                    : 'text-secondary-fg',
                  'hover:text-primary-fg transition-colors',
                )}
                key={subItem.href}
              >
                <Link
                  className='block'
                  href={subItem.href}
                >
                  {subItem.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  });
};

export { NotesGlobalToc };

export type { NotesGlobalTocProps };
