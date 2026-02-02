/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7f9',
          100: '#dceef2',
          200: '#b8dde5',
          300: '#8cc5d3',
          400: '#5aa8bb',
          500: '#3f8fa3',
          600: '#357489',
          700: '#2f6070',
          800: '#2d505d',
          900: '#284350',
        },
      },
    },
  },
  plugins: [],
}
