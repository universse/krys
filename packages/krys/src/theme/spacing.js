const { baseline } = require('./bases')
const { rem } = require('./spacingUtilities')

const spacing = {
  xxs: rem(1 * baseline),
  xs: rem(2 * baseline),
  s: rem(4 * baseline),
  m: rem(6 * baseline),
  l: rem(12 * baseline),
  xl: rem(16 * baseline)
}

module.exports = {
  spacing
}
