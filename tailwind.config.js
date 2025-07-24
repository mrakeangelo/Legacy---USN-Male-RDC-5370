/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          primary: '#0a192f',
          secondary: '#1e293b',
          accent: '#334155'
        },
        silver: '#cbd5e1',
        gunmetal: '#1e293b',
        dress: '#f9fafb',
        gold: '#ffd700'
      },
      fontFamily: {
        'command': ['Oswald', 'Anton', 'sans-serif'],
        'body': ['Inter', 'DM Sans', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'rank-reveal': 'rankReveal 1s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        rankReveal: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        }
      }
    },
  },
  plugins: [],
}