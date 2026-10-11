/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#002968',
          'navy-light': '#0A3A82',
          'navy-dark': '#001F4D',
          'light-blue': '#EAF1FA',
          'soft-gray': '#F5F8FC',
          'dark-text': '#172033',
          accent: '#00A0B0',
          'accent-light': '#E0F7F9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'accordion-down': 'accordionDown 0.3s ease-out',
        'accordion-up': 'accordionUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        accordionDown: {
          '0%': { height: '0', opacity: '0' },
          '100%': { height: 'auto', opacity: '1' },
        },
        accordionUp: {
          '0%': { height: 'auto', opacity: '1' },
          '100%': { height: '0', opacity: '0' },
        },
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(135deg, rgba(0,41,104,0.95) 0%, rgba(0,41,104,0.75) 50%, rgba(0,41,104,0.85) 100%)",
      },
    },
  },
  plugins: [],
};
