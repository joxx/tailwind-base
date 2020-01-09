const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const purgecss = require('@fullhuman/postcss-purgecss')
const tailwindcss = require('tailwindcss')

module.exports = {
  plugins: [
    tailwindcss(),
    autoprefixer(),
    purgecss({
      content: ['./layouts/**/*.html'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    }),
    cssnano({
      preset: 'default'
    })
  ]
}