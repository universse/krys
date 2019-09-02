const breakpoints = { xs: '22.5rem', s: '30rem', m: '48rem', l: '64rem' }
const colors = {
  blue: '#007ace',
  red: '#00ac69',
  green: '#01a299',
  gray: '#000000',
  blue10: '#e7f2fa',
  blue20: '#b6d9f1',
  blue30: '#85bfe8',
  blue40: '#53a5de',
  blue50: '#1d89d4',
  blue60: '#006db9',
  blue70: '#005590',
  blue80: '#003e68',
  blue90: '#002843',
  blue100: '#00131f',
  red10: '#e1f5ed',
  red20: '#a3e1c9',
  red30: '#62cca2',
  red40: '#18b477',
  red50: '#00975c',
  red60: '#007a4b',
  red70: '#005f3a',
  red80: '#00452a',
  red90: '#002c1b',
  red100: '#00150d',
  green10: '#e2f4f3',
  green20: '#a7dfdc',
  green30: '#69c8c3',
  green40: '#26afa8',
  green50: '#01948b',
  green60: '#017871',
  green70: '#015d58',
  green80: '#004340',
  green90: '#002b29',
  green100: '#001413',
  gray10: '#f1f1f1',
  gray20: '#d4d4d4',
  gray30: '#b9b9b9',
  gray40: '#9e9e9e',
  gray50: '#848484',
  gray60: '#6a6a6a',
  gray70: '#525252',
  gray80: '#3b3b3b',
  gray90: '#262626',
  gray100: '#111111',
  black: '#000000',
  white: '#ffffff'
}
const spacing = {
  xxs: '0.25rem',
  xs: '0.5rem',
  s: '1rem',
  m: '1.5rem',
  l: '3rem',
  xl: '4rem'
}
const typeHierarchy = { '22.5rem': {}, '30rem': {}, '48rem': {}, '64rem': {} }
const typography = {
  sans:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",  "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  serif: 'Georgia, Times, "Times New Roman", serif',
  monospace:
    '"SF Mono", "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono", Menlo, Courier, monospace'
}

module.exports = {
  breakpoints,
  colors,
  spacing,
  typeHierarchy,
  typography
}
