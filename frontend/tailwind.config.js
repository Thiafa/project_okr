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
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
