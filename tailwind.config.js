/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'anti-clock': 'anti 1s linear infinite'
      },
      keyframes: {
        anti: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(-360deg)',
          }
        }
      }
    },
  },
  plugins: [],
}

