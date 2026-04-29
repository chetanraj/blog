/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blog: {
          bg: 'var(--bg-color)',
          header: 'var(--header-bg)',
          primary: 'var(--primary-color)',
          secondary: 'var(--secondary-color)',
          lightgray: '#999',
        },
      },
    },
  },
  plugins: [],
};
