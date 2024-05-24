/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night:      '#160924',
        moon:       '#231136',
        space:      '#10061a',
        hotpink:    '#ef476f',
        bubblegum:  '#ca416d',
      },
    },
  },
  plugins: [],
}

