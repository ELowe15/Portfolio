/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables toggling dark mode with a class
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        // Grays
        main: '#1F2937', // gray-800
        lightMain: '#B8D9D6', // gray-300
        summary: '#F4F1EC', // gray-400
        gray500: '#6B7280', // gray-500
        darkText: '#9CA3AF', // gray-400
        lightText: '#4B5563', // gray-600
        gray700: '#374151', // gray-700
        background: '#111827', // gray-900
        lightBackground: '#111827',

        darkTool: '#374151',
        hoverDarkTool: '#4B5563',
        lightTool: '#FEE4D6',
        hoverLightTool: '#FBBF24',

        // Blues
        darkLink: '#60A5FA', // blue-400
        lightLink: '#2563EB',
        darkButton: '#3B82F6', // blue-500
        darkButtonHover: '#2563EB', // blue-600
        lightButton: '#FBC4A5', // blue-500
        lightButtonHover: '#FEE4D6', // blue-600

        // Yellows
        yellow400: '#FBBF24', // yellow-400

        // Other
        transparent: 'transparent',
      },
    },
  },
  plugins: [],
};