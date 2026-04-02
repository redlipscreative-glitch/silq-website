/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FDF8F2',
        beige: '#F0DEC4',
        sand: '#C4A882',
        nude: '#8B6D4E',
        'nude-light': '#A88A6A',
      },
      fontFamily: {
        heading: ['"Arial Black"', 'Arial', 'sans-serif'],
        body: ['Poppins', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.5em',
        widest3: '0.8em',
      },
    },
  },
  plugins: [],
}
