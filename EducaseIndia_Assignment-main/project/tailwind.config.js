/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          200: '#E9D7FE',
          300: '#D4BBFC',
          400: '#B692F6',
          500: '#9E77ED',
          600: '#7F3DFF',
          700: '#6941C6',
          800: '#53389E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0px 2px 8px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};