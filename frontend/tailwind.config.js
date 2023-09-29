/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        'okr-gray': '#D9D9D9',
        'okr-blue': '#3DCAFF',
        'okr-blue-dark': '#086893',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
