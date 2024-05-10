/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'primary': '#FFFFFF',
      'primary-100': '#E7DEFE',
      'primary-200': '#CEBEFE',
      'primary-300': '#B49DFE',
      'primary-400': '#9F84FD',
      'primary-500': '#7C5CFC',
      'primary-600': '#5E43D8',
      'primary-700': '#432EB5',
      'primary-800': '#2D1D92',
      'primary-900': '#1D1178', 
      'secondary-100': '#E0E9F4',
      'secondary-200': '#C3D4E9',
      'secondary-300': '#90A3BF',
      'secondary-400': '#596780',
      'secondary-500': '#1A202C',
      'secondary-600': '#131825',
      'secondary-700': '#0D121F',
      'secondary-800': '#080C19',
      'secondary-900': '#040815', 
    },  
  },
  plugins: [],
}


