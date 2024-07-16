import toemTailwindPlugin from 'toem-tailwind-plugin';
import tailwindTypographyPlugin from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'caret': {
          '0%': { opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'heartbeat': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.25)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      animation: {
        'caret': 'caret 1s infinite',
        'heartbeat': 'heartbeat 1s infinite',
      }
    },
  },
  plugins: [toemTailwindPlugin, tailwindTypographyPlugin],
}

