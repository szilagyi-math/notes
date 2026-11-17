import Link from 'next/link';

import items from './items';

interface HeaderProps {}

const Header = () => (
  <header className='site-header'>
    <div className='site-header-inner'>
      <Link
        href='/'
        aria-label='BME Matematika – Kezdőlap'
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className='site-logo'
          src='/static/bme-horizontal-hu.png'
          alt='BME'
        />
      </Link>
      <nav aria-label='Fő navigáció'>
        <ul>
          {items.map(item => (
            <li key={item.href}>
              <Link
                prefetch={item.prefetch}
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

export { Header };
export type { HeaderProps };
