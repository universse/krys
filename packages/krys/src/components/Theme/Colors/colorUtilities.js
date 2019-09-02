import chroma, { hcl } from 'chroma-js'

const createLightnessScale = numOfShades =>
  Array(numOfShades)
    .fill(null)
    .map((_, i) => 90 - i * 20)

const lightnessToLuminance = lightness => hcl(0, 0, lightness).luminance()

const lightnessScale = createLightnessScale(5)

export const luminanceScale = lightnessScale.map(lightnessToLuminance)

export const createColorLuminanceScale = lumScale => color =>
  lumScale.map(luminance =>
    chroma(color)
      .luminance(luminance)
      .hex()
  )

export const createPalette = colors => {
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

export const createColorPalette = colors =>
  flattenPalette(createPalette(colors))
