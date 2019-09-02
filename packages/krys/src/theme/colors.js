const { brandColors } = require('./bases')
const { createColorPalette } = require('./colorUtilities')

const colors = Object.assign({}, brandColors, createColorPalette(brandColors), {
  black: '#000000',
  white: '#ffffff'
})

module.exports = {
  colors
}
