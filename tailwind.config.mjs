/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        devanagari: ['Noto Serif Devanagari', 'Lora', 'serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      colors: {
        warm: {
          50: '#FAF7F2',
          100: '#F3EFE7',
          200: '#E6DFD3',
          300: '#D5CBBF',
          700: '#3D3934',
          800: '#23211F',
          900: '#161514',
        },
        terracotta: {
          500: '#8C3B2D',
          600: '#753024',
          700: '#5F261C',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '66ch',
            color: 'inherit',
            fontFamily: theme('fontFamily.serif').join(','),
            lineHeight: '1.8',
            a: {
              color: 'inherit',
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
              textDecorationThickness: '1px',
              textDecorationColor: theme('colors.terracotta.500'),
              '&:hover': {
                color: theme('colors.terracotta.500'),
              },
            },
            'h1, h2, h3, h4': {
              fontFamily: theme('fontFamily.serif').join(','),
              color: 'inherit',
              fontWeight: '500',
            },
            blockquote: {
              borderLeftColor: theme('colors.terracotta.500'),
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
