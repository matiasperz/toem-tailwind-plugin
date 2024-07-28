const VERCEL_URL =
  // eslint-disable-next-line no-nested-ternary
  import.meta.env['MODE'] === 'production'
    ? 'https://toem-tailwind-plugin.vercel.app'
    : import.meta.env['NEXT_PUBLIC_VERCEL_URL']
      ? `https://${import.meta.env['NEXT_PUBLIC_VERCEL_URL']}`
      : '';

const PUBLIC_URL = VERCEL_URL || 'http://localhost:3000';

export const metadata = {
  title: 'toem Tailwind Plugin',
  description: 'A Tailwind plugin for dynamically calculate em values.',
  image: PUBLIC_URL + '/OG.jpg',
  favicon: PUBLIC_URL + '/tailwind.svg',
}