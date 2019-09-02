const { baseFontSize } = require('./bases')

const rem = px => {
  return px / baseFontSize
}

module.exports = {
  rem
}
