/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Newsreader', 'Lora', 'Georgia', 'serif'],
        devanagari: ['Noto Serif Devanagari', 'Lora', 'serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      colors: {
        warm: {
          50: '#FAF8F5',
          100: '#F4EFE8',
          200: '#E7E0D5',
          300: '#D5CBBF',
          400: '#A89E91',
          700: '#3D3934',
          800: '#23211F',
          900: '#14161A',
          950: '#0D1015',
        },
        brick: {
          500: '#9E3D2A',
          600: '#853221',
          700: '#6C2719',
        },
        terracotta: {
          500: '#9E3D2A',
          600: '#853221',
          700: '#6C2719',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: 'inherit',
            lineHeight: '1.85',
            p: {
              marginBottom: '1.5em',
            },
            a: {
              color: 'inherit',
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
              textDecorationThickness: '1px',
              textDecorationColor: theme('colors.brick.500'),
              '&:hover': {
                color: theme('colors.brick.500'),
              },
            },
            'h1, h2, h3, h4': {
              fontFamily: theme('fontFamily.serif').join(','),
              color: 'inherit',
              fontWeight: '500',
            },
            blockquote: {
              borderLeftColor: theme('colors.brick.500'),
              fontStyle: 'italic',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
