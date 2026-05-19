/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0b',
        surface: '#111114',
        'surface-2': '#18181d',
        accent: '#6c63ff',
        'accent-2': '#a78bfa',
        muted: '#8a8a9a',
        faint: '#3a3a4a',
        border: 'rgba(255,255,255,0.07)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        lg: '20px',
      },
      maxWidth: {
        container: '1120px',
      },
      animation: {
        'fade-up': 'fadeUp 0.75s cubic-bezier(.22,.68,0,1.2) both',
        'fade-in': 'fadeIn 0.9s ease both',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
