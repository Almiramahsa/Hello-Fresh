/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      hellogreen: '#90BF1D',
      hellogray:'#A7A7A7',
      hellolight:'#F5F5F5',
      helloblack:'#000000',
      helloorange: '#F1B44A ',
      hellowhite: '#FFFFFF'

    },
    fontFamily: {
      'jakarta-extralight': ['Jakarta-Extralight'],
      'jakarta-reguler': ['Jakarta-Reguler'],
      'jakarta-bold': ['Jakarta-Bold'],
      'jakarta-medium' : ['Jakarta-Medium']

    },
  },
  plugins: [],
}