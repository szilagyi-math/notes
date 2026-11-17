type MainNavItem = {
  label: string;
  href: string;
  prefetch?: boolean;
};

const items: Array<MainNavItem> = [
  { label: 'Kezdőlap', href: '/', prefetch: true },
  { label: 'Tantárgyak', href: '/subjects', prefetch: true },
  { label: 'Letöltések', href: '/downloads', prefetch: true },
];

export default items;
