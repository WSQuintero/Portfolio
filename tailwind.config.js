/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        righteous: ['Righteous', 'cursive'],
        Akira: ['Akira', 'cursive']
      },
      colors: {
        darkBlue: '#08273C',
        lightBlue: '#565CA3'
      }
    }
  },
  plugins: []
}
