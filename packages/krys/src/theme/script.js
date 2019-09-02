const fs = require('fs')
const prettier = require('prettier')

const { breakpoints } = require('./breakpoints')
const { colors } = require('./colors')
const { spacing } = require('./spacing')
const { typeHierarchy } = require('./typeHierarchy')
const { typography } = require('./typography')

const prettierConfig = { singleQuote: true, semi: false, parser: 'babylon' }

fs.writeFileSync(
  './src/theme/index.js',
  prettier.format(
    `
    export const breakpoints = ${JSON.stringify(breakpoints)}
    export const colors = ${JSON.stringify(colors)}
    export const spacing = ${JSON.stringify(spacing)}
    export const typeHierarchy = ${JSON.stringify(typeHierarchy)}
    export const typography = ${JSON.stringify(typography)}
    `,
    prettierConfig
  )
)

// fs.writeFileSync(
//   './src/try/theme.js',
//   prettier.format(
//     `
//     const breakpoints = ${JSON.stringify(breakpoints)}
//     const colors = ${JSON.stringify(colors)}
//     const spacing = ${JSON.stringify(spacing)}
//     const typeHierarchy = ${JSON.stringify(typeHierarchy)}
//     const typography = ${JSON.stringify(typography)}

//     module.exports = {
//       breakpoints,
//       colors,
//       spacing,
//       typeHierarchy,
//       typography
//     }
//     `,
//     prettierConfig
//   )
// )
