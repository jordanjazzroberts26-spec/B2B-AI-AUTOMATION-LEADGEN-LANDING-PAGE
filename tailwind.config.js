/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0F',
        surface: '#111118',
        border: '#1E1E2E',
        primary: '#F0F0FF',
        muted: '#6B7280',
        neon: '#00D4FF',
        purple: '#8B5CF6',
        success: '#10B981',
        destructive: '#EF4444',
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
      boxShadow: {
        neon: '0 0 20px rgba(0, 212, 255, 0.3)',
      }
    },
  },
  plugins: [],
};
