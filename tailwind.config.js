module.exports = {
  content: ["./app/**/*.{html,ejs}", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontSize: {
      xs:['12px', {
        lineHeight: '15px',
      }],
      sm: ['14px', {
        lineHeight: '21px',
      }],
      base:['16px', {
        lineHeight: '24px',
      }],
      lg:['18px', {
        lineHeight: '27px',
      }],
      xl:['20x', {
        lineHeight: '30px',
      }],
      '2xl':['24px', {
        lineHeight: '36px',
      }],
      '3xl':['30px', {
        lineHeight: '45px',
      }],
      '5xl':['48px', {
        lineHeight: '72px',
      }],
      '6xl':['60px', {
        lineHeight: '90px',
      }],
      '7xl':['72px', {
        lineHeight: '108px',
      }],
      '8xl':['14px', {
        lineHeight: '21px',
      }],
      '9xl':['128px', {
        lineHeight: '192px',
      }],
    },
    extend: {
      colors:{
        primary:{
          DEFAULT:'#198754'
        },
        secondary:{
          DEFAULT:'#CED4DA',
          light:'#F8F9FA',
          verylight:'#F8F9FA',
          dark:'#212529'
        },
        third:{
          DEFAULT:'#212529'
        }
      },
      padding: {
        '4.5': '18px',
      },
      margin: {
        '4.5': '18px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('flowbite/plugin')
  ],
}