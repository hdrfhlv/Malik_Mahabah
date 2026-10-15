/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A5BD3',
          dark: '#0B2A5B',
          light: '#38BDF8',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          soft: '#F4F8FF',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'blob': 'blob 12s ease-in-out infinite',
        'blob-reverse': 'blob 15s ease-in-out infinite reverse',
        'wave': 'wave 8s ease-in-out infinite',
        'shine': 'shine 0.6s linear',
        'count-up': 'countUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '25%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '50%': { borderRadius: '50% 60% 30% 60% / 30% 40% 70% 50%' },
          '75%': { borderRadius: '70% 30% 50% 40% / 40% 70% 30% 60%' },
        },
        wave: {
          '0%, 100%': { d: 'path("M0,50 C150,20 350,80 500,50 C650,20 850,80 1000,50 L1000,100 L0,100 Z")' },
          '50%': { d: 'path("M0,50 C150,80 350,20 500,50 C650,80 850,20 1000,50 L1000,100 L0,100 Z")' },
        },
        shine: {
          '0%': { left: '-100%' },
          '100%': { left: '200%' },
        },
      },
      backgroundImage: {
        'gradient-mesh': 'radial-gradient(at 40% 20%, #38BDF8 0px, transparent 50%), radial-gradient(at 80% 0%, #0A5BD3 0px, transparent 50%), radial-gradient(at 0% 50%, #0B2A5B 0px, transparent 50%)',
      },
    },
  },
  plugins: [],
};
