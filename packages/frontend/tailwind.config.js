/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,jsx}', '../common/utils/*.jsx', '../ui/src/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Noto: ['Noto Sans SC', 'sans-serif'],
        NotoSerif: ['Noto Serif SC', 'serif'],
        base: ['tsangeryuyangtw-subset', 'sans-serif'],
      },
      width: {
        '3/8': '37.5%',
        '5/8': '62.5%',
      },
      fontSize: {

      },
      screens: {
        xs: '300px',
        sm: '360px',
        md: '450px',
        lg: '516px',
        '2md': '600px',
        xl: '708px',
        '2xl': '825px',
        '3xl': '1050px',
        '4xl': '1120x',
        '5xl': '1350px',
        '6xl': '1500px'
      },
      aspectRatio: {
        '3/4': '3 / 4'
      },
      container: {
        padding: '0.5rem',
        center: true
      },
      margin: {
        '1/2': '50%',
        '2/5': '40%',
        '1/3': '33.33%',
        '3/10': '30%'
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        dark_: {
          'base-100': '#000000',

          'base-content': 'rgb(214 211 209)',

          primary: 'rgb(38 38 38)',

          'primary-content': 'rgb(231 229 228)',

          secondary: 'rgb(82, 82, 82)',

          'secondary-content': 'rgb(212 212 212)',

          accent: 'rgb(199 210 254)',

          'accent-content': 'rgb(221 214 254)',

          neutral: 'rgb(100 116 139)',

          'neutral-content': "rgb(168 162 158)",

          info: 'rgb(96 165 250)',

          'info-content': 'rgb(224 242 254)',

          success: 'rgb(74 222 128)',

          'success-content': 'rgb(2 44 34)',

          warning: 'rgb(217 119 6)',

          'warning-content': 'rgb(255 237 213)',

          error: 'rgb(248 113 113)',

          'error-content': 'rgb(76 5 25)'
        }
      }
    ]
  }
}
