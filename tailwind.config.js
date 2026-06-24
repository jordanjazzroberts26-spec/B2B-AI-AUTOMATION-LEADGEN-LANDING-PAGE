/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0f',
        surface: '#111118',
        'surface-2': '#16161f',
        accent: '#00d4ff',
        'accent-2': '#8b5cf6',
        muted: '#6b7280',
        faint: '#2a2a3a',
        border: '#1e1e2e',
        success: '#10b981',
        destructive: '#ef4444',
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
