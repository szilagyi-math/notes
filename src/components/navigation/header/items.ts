type MainNavItem = {
  label: string;
  href: string;
  prefetch?: boolean;
};

const items: Array<MainNavItem> = [
  { label: 'Kezdőlap', href: '/', prefetch: true },
  // { label: 'Munkatársak', href: '/staff', prefetch: true },
  { label: 'Tantárgyak', href: '/subjects', prefetch: true },
];

export default items;
