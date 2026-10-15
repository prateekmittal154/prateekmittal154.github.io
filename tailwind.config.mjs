/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['Newsreader', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
        devanagari: ['Noto Serif Devanagari', 'Rozha One', 'serif'],
      },
      colors: {
        parchment: {
          50: '#FDFBF7',
          100: '#F7F4EC',
          200: '#EFEAE0',
          300: '#E3DCce',
          400: '#C7BDAB',
          900: '#2E2B25',
        },
        ink: {
          50: '#F4F5F7',
          100: '#E4E7EB',
          200: '#C5CBD3',
          800: '#151A22',
          850: '#10141B',
          900: '#0B0E14',
          950: '#06080B',
        },
        gold: {
          400: '#E6A760',
          500: '#D48B38',
          600: '#B87228',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '68ch',
            color: 'inherit',
            a: {
              color: 'inherit',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              textDecorationColor: theme('colors.gold.500'),
              '&:hover': {
                color: theme('colors.gold.500'),
              },
            },
            'h1, h2, h3, h4': {
              fontFamily: theme('fontFamily.serif').join(','),
              color: 'inherit',
              fontWeight: '600',
            },
            blockquote: {
              borderLeftColor: theme('colors.gold.500'),
              fontFamily: theme('fontFamily.serif').join(','),
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
