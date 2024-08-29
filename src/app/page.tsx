import Link from 'next/link';

import { SubjectsOverview } from '@/components';

import type { NextPage } from 'next';

interface HomePageProps {}

const items = [
  {
    title: 'Aktuális hírek',
    details: {
      title: 'Összes hír',
      href: '/news',
    },
    key: 'news',
    Component: () => <div>News</div>,
  },
  {
    title: 'Kötelező tárgyak',
    details: {
      title: 'Összes tárgy',
      href: '/subjects',
    },
    key: 'subjects',
    Component: SubjectsOverview,
  },
  {
    title: 'Kapcsolat',
    key: 'contact',
    Component: () => <div>Contact</div>,
  },
];

const HomePage: NextPage<HomePageProps> = () => {
  return items.map(({ key, title, details, Component }) => (
    <div
      key={key}
      className='mt-8 flex flex-col gap-4 mx-4'
    >
      <h2 className='text-3xl font-semibold border-b-2 pb-2'>
        {title}
        {details && (
          <span className='text-sm ml-2 font-normal text-secondary-fg'>
            {'('}
            <Link
              className='transition-colors duration-300 underline hover:text-accent-9'
              href={details.href}
            >
              {details.title}
            </Link>
            {')'}
          </span>
        )}
      </h2>

      <Component />
    </div>
  ));
};

export default HomePage;
