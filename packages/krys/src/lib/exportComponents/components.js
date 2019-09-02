const { colors } = require('./theme')

const components = {
  Button: {
    name: 'Button',
    tag: 'button',
    style: {
      base: `
        color: ${colors.blue};
        font-size: 28px;
        font-weight: 700;
        line-height: 80px;
      `,
      dynamic: {},
      theming: {
        mode: {
          light: `
            background-color: ${colors.red};
            color: ${colors.green};
          `,
          dark: `
            background-color: ${colors.green};
            color: ${colors.red};
          `
        },
        spacing: {
          airy: `
            padding: 32px;
          `,
          compact: `
            padding: 8px;
          `
        }
      },
      variants: {
        mode: {
          default: {
            light: `
              background-color: blue;
              color: red;
            `,
            dark: `
              background-color: red;
              color: blue;
            `
          },
          primary: {
            light: `
              background-color: green;
              color: yellow;
            `,
            dark: `
              background-color: yellow;
              color: green;
            `
          }
        },
        spacing: {
          default: {},
          secondary: {}
        }
      }
    },

    propTypes: {},
    defaultProps: {}
  }
}

module.exports = {
  components
}
