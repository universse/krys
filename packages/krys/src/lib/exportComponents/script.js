const { remote } = window.require('electron')

const fs = require('fs')
// prettier works in browser
const prettier = remote.require('prettier')

const { components } = require('./components')
const { createComponent } = require('./componentUtilities')

const prettierConfig = { singleQuote: true, semi: false, parser: 'babylon' }

const exportComponents = () => {
  Object.entries(components).forEach(([component, componentDef]) => {
    const template = createComponent(componentDef)
    const formatted = prettier.format(template, prettierConfig)
    fs.writeFileSync(`./src/${component}.js`, formatted)
  })
}

module.exports = {
  exportComponents
}
