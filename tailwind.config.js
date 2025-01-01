/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montreal: ['Neue Montreal', 'Roboto'],
        grotesk: ['Founders Grotesk', 'Roboto'],
      },
    },
  },
  plugins: [],
};