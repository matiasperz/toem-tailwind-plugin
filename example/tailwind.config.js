import toemTailwindPlugin from 'toem-tailwind-plugin';

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
      
      },
      animation: {
        'caret': 'caret 1s infinite',
      }
    },
  },
  plugins: [toemTailwindPlugin],
}

