const { rem } = require('./spacingUtilities')

const breakpoints = {
  l: rem(1024),
  m: rem(768),
  s: rem(480),
  xs: rem(360)
}

module.exports = {
  breakpoints
}
