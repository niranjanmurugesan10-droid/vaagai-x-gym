/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#131313',
        surface: '#1F1F1F',
        'surface-low': '#0e0e0e',
        'surface-high': '#2a2a2a',
        'on-surface': '#E2E2E2',
        'on-surface-variant': '#e7bdb8',
        primary: '#e31c25',
        'primary-container': '#e31c25',
      },
      fontFamily: {
        headline: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(227,28,37,0.25)',
      },
    },
  },
  plugins: [],
};
