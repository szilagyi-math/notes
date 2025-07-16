import Link from 'next/link';

import items from './items';

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <header className='z-30 w-full sticky top-0 bg-secondary-bg h-nav-height-no-border border-b-2'>
      <nav className='mx-auto max-w-content-width px-4 flex items-center h-full'>
        <ul className='flex gap-4'>
          {items.map(item => {
            return (
              <li key={item.href}>
                <Link
                  prefetch={item.prefetch}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className='block my-2 ml-auto mr-0 h-5/6'
          src='static/eu-szechenyi-mo.svg'
          alt='Európai Unió és a Magyar Állam támogatásával'
        />
      </nav>
    </header>
  );
};

export { Header };

export type { HeaderProps };
