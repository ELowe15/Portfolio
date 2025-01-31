/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables toggling dark mode with a class
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {

        main: '#1F2937', // Dark gray, used for primary elements
        lightMain: '#98C1BE', // Soft teal-gray, lighter alternative for contrast
        summary: '#F4F1EC', // Warm off-white, used for summary sections
        gray500: '#6B7280', // Medium gray, for subtle text and borders
        darkText: '#9CA3AF', // Light gray, used for secondary text
        lightText: '#4B5563', // Darker gray, used for readable text
        gray700: '#374151', // Dark gray, used for emphasis and contrast
        background: '#111827', // Deep navy-gray, used for dark mode background
        lightBackground: '#111827', // Same as background, for consistency

        darkTool: '#374151', // Dark gray, used for dark mode tool backgrounds
        hoverDarkTool: '#4B5563', // Slightly lighter gray, used for hover states in dark mode
        lightTool: '#FBC4A5', // Soft pastel peach, used for light mode tool backgrounds
        hoverLightTool: '#FBBF24', // Warm golden yellow, used for hover effects in light mode

        // Blues
        darkLink: '#60A5FA', // Bright sky blue, used for links in dark mode
        lightLink: '#2563EB', // Deep blue, used for links in light mode
        darkButton: '#3B82F6', // Vibrant blue, used for primary buttons in dark mode
        darkButtonHover: '#2563EB', // Darker blue, used for hover state on dark mode buttons
        lightButton: '#FBC4A5', // Soft pastel orange, used for primary buttons in light mode
        lightButtonHover: '#FEE4D6', // Pale peach, used for hover state on light mode buttons

        // Yellows
        yellow400: '#FBBF24', // Bright golden yellow, used for highlights and accents

        // Other
        transparent: 'transparent',
      },
    },
  },
  plugins: [],
};