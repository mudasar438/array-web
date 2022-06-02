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
           cardtext:'var(--color-cardtext)',

        },

      },
      backgroundColor:{
        skin:{
          fill:'var(--color-fill)',
          bblack:'var(--color-black)',
          rgbblue:'var(--color-rgbbtn)',
          ffgray:'var(--color-footer)',
          bgblack:'var(--color-homepage)',
          bgcard:'var(--color-rgbabg)',
          // 'button-accent':'var(--color-button-accent)',
          // 'button-accent-hover':'var(-color-button-accent-hover)',
          // 'button-muted':'var(--color-button-muted)',

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
