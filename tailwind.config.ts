import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    width: {
      descr: '450px',
      descr_md: '598px',
      calc_40: 'calc(100% - 40px)'
    },
    extend: {
      maxWidth: {
        'descr': '450px',
        'descr_md': '598px',
      },
      screens: {
        'se': "370px",
      },
      fontFamily: {
        helvetica: ['Helvetica Neue', 'sans-serif'],
        kefa: ['Kefa'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: '#194F90',
        secondary: '#AED8F2',
        whitePremium: 'rgba(250,250,250, .9)',
        title: 'var(--titles-color)',
        description: 'var(--description-color)',
        mail: 'var(--text-color-mail)',
        persentage: 'var(--persentage-color)',
        space: {
          dark: 'var(--space-dark)',
          medium: 'var(--space-medium)',
          light: 'var(--space-light)',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      boxShadow: {
        custom:
          'inset 0 8px 8px rgba(0, 0, 0, 0.4), 0 12px 20px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        rotate: 'rotate 60s linear infinite',
        float: 'float 6s ease-in-out infinite',
        wave: 'wave 1.5s infinite',
        ferrari: 'ferrari 60s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        wave: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '25%': { transform: 'translateY(-5px)', opacity: '1' },
          '50%': { transform: 'translateY(0)', opacity: '1' },
          '75%': { transform: 'translateY(-5px)', opacity: '1' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        ferrari: {
          '0%': { transform: 'translateY(40px)', opacity: '1' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')],
} satisfies Config
