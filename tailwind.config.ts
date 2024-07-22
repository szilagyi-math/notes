import prose from '@tailwindcss/typography';

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: {
        bg: 'rgba(var(--primary-bg) / <alpha-value>)',
        fg: 'rgba(var(--primary-fg) / <alpha-value>)',
      },
      secondary: {
        bg: 'rgba(var(--secondary-bg) / <alpha-value>)',
        fg: 'rgba(var(--secondary-fg) / <alpha-value>)',
      },
      border: 'rgba(var(--border) / <alpha-value>)',

      gray: {
        1: 'rgba(var(--gray-1) / <alpha-value>)',
        2: 'rgba(var(--gray-2) / <alpha-value>)',
        3: 'rgba(var(--gray-3) / <alpha-value>)',
        4: 'rgba(var(--gray-4) / <alpha-value>)',
        5: 'rgba(var(--gray-5) / <alpha-value>)',
        6: 'rgba(var(--gray-6) / <alpha-value>)',
        7: 'rgba(var(--gray-7) / <alpha-value>)',
        8: 'rgba(var(--gray-8) / <alpha-value>)',
        9: 'rgba(var(--gray-9) / <alpha-value>)',
        10: 'rgba(var(--gray-10) / <alpha-value>)',
        11: 'rgba(var(--gray-11) / <alpha-value>)',
        12: 'rgba(var(--gray-12) / <alpha-value>)',
        contrast: 'rgba(var(--gray-contrast) / <alpha-value>)',
      },
      accent: {
        1: 'rgba(var(--accent-1) / <alpha-value>)',
        2: 'rgba(var(--accent-2) / <alpha-value>)',
        3: 'rgba(var(--accent-3) / <alpha-value>)',
        4: 'rgba(var(--accent-4) / <alpha-value>)',
        5: 'rgba(var(--accent-5) / <alpha-value>)',
        6: 'rgba(var(--accent-6) / <alpha-value>)',
        7: 'rgba(var(--accent-7) / <alpha-value>)',
        8: 'rgba(var(--accent-8) / <alpha-value>)',
        9: 'rgba(var(--accent-9) / <alpha-value>)',
        10: 'rgba(var(--accent-10) / <alpha-value>)',
        11: 'rgba(var(--accent-11) / <alpha-value>)',
        12: 'rgba(var(--accent-12) / <alpha-value>)',
        contrast: 'rgba(var(--accent-contrast) / <alpha-value>)',
      },
    },
  },
  plugins: [prose],
};
export default config;
