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
          50: '#e9fbfd',
          100: '#cff6fb',
          200: '#a7edf6',
          300: '#71dfef',
          400: '#38cfe6',
          500: '#22d3e8', // Logo turquoise - exact match
          600: '#12b6c9',
          700: '#0e8e9d',
          800: '#0b6f7b',
          900: '#0a5a64',
        },
        ink: '#0b1220',
        muted: '#5b6777',
        border: '#e7eef3',
      },
    },
  },
  plugins: [],
}
