const chroma = require('chroma-js')
const { hcl } = chroma

const createLightnessScale = numOfShades =>
  Array(numOfShades)
    .fill(null)
    .map((_, i) => 95 - i * 10)

const lightnessToLuminance = lightness => hcl(0, 0, lightness).luminance()

const lightnessScale = createLightnessScale(10)

const luminanceScale = lightnessScale.map(lightnessToLuminance)

const createColorLuminanceScale = lumScale => color =>
  lumScale.map(luminance =>
    chroma(color)
      .luminance(luminance)
      .hex()
  )

const createPalette = colors => {
  colors.gray = '#000000'
  return Object.keys(colors).reduce((palette, color) => {
    palette[color] = createColorLuminanceScale(luminanceScale)(colors[color])
    return palette
  }, {})
}

const flattenPalette = palette =>
  Object.keys(palette).reduce((flattened, colorName) => {
    var values = palette[colorName]
    values.forEach((value, i) => {
      flattened[colorName + (i + 1) * 10] = value
    })
    return flattened
  }, {})

const createColorPalette = colors => flattenPalette(createPalette(colors))

module.exports = {
  createColorPalette
}
