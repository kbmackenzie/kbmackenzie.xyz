/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          DEFAULT: '#10061a',
          soft:    '#160924',
          button: {
            DEFAULT: '#231136',
          },
        },
        moon: {
          light: '#bf9ee0',
        },
        bubblegum: {
          DEFAULT: '#ef476f',
          button: {
            hover: '#fd7b9a',
          },
        },
      },
      fontFamily: {
        firamono: ['"Fira Mono"', 'monospace']
      },
    },
  },
  plugins: [],
}

