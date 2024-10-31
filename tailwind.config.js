/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: 'var(--color-sage-50)',
          100: 'var(--color-sage-100)',
          500: 'var(--color-sage-500)',
          600: 'var(--color-sage-600)',
          700: 'var(--color-sage-700)',
          900: 'var(--color-sage-900)',
        },
      },
    },
  },
  plugins: [],
};