/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        nyaya: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          500: '#0f172a', // Deep Navy Primary
          600: '#0a0f1d', // Darker Navy
          700: '#060a13',
          800: '#03050a',
          900: '#000000',
          gold: '#f59e0b', // Saffron Accent
        },
      },
    },
  },
  plugins: [],
};
