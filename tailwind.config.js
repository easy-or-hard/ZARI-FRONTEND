/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkPurple: '#3A2B4D',
        themeText: '#A356FB',
        buttonActivated: '#8F39D6',
        buttonDisabled: '#464646',
        buttonDisabledTextColor: '#BDBDBD',
      },
    },
  },
  plugins: [],
}
