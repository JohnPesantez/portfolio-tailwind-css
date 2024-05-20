// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3B82F6', // blue-500
          dark: '#2563EB',  // blue-600
        },
        secondary: {
          light: '#EC4899', // pink-500
          dark: '#BE185D',  // pink-700
        },
        accent: {
          light: '#FBBF24', // yellow-400
          dark: '#F59E0B',  // yellow-600
        },
        neutral: {
          light: '#F3F4F6', // gray-100
          dark: '#1F2937',  // gray-800
          textLight: '#1F2937', // gray-800
          textDark: '#F9FAFB', // gray-50
        },
        'custom-light-teal': '#a0e9f9',
        'custom-light-gray': '#f8f8f8',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #a0e9f9, #f8f8f8)',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
      backgroundImage: ['dark'],
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};

