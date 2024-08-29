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
      </nav>
    </header>
  );
};

export { Header };

export type { HeaderProps };
