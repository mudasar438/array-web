module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor:{
        skin:{
        
          base:'var(--color-text-base)',
          muted: 'var(--color-text-muted)',
          cgray: 'var(--color-text-muted)',
           inverted:'var( --color-gray)',

        },

      },
      backgroundColor:{
        skin:{
          fill:'var(--color-fill)',
          bblack:'var(--color-black)',
          'button-accent':'var(--color-button-accent)',
          'button-accent-hover':'var(-color-button-accent-hover)',
          'button-muted':'var(--color-button-muted)',

        }

      },
      gradientColor:{
        skin:{
          hue:'var(--color-fill)'
        }

      },

    },
  },
  plugins: [],
}
