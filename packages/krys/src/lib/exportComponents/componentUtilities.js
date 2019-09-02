// multiple variant-theme(s)
// import from styledUtilities - template
// process attributes
const processVariants = variants => {
  if (variants) {
    let allVariants = []
    const variantDefs = Object.entries(variants)
      .map(([name, values]) => {
        const variantDef = Object.entries(values)
          .map(([variant, variantStyle]) => {
            if (!allVariants.includes(variant)) {
              allVariants.push(variant)
            }
            const args = Object.entries(variantStyle)
              .map(([theme, value]) => {
                return `
                  ${theme}: css\`${value}\`
                `
              })
              .join(',')

            return `
              ${variant}: {${args}}
            `
          })
          .join(',')

        return `
          const ${name}Variants = theme.variants('${name}', 'variant', {
            ${variantDef}      
          })
        `
      })
      .join('')

    const variantDeclarations = Object.keys(variants)
      .map(name => `\${${name}Variants};`)
      .join(`;`)

    return {
      variantDefs,
      variantDeclarations,
      variantPropTypes: `
        variant: PropTypes.oneOf(${JSON.stringify(allVariants)}).isRequired
      `
    }
  }
  return {
    variantDefs: '',
    variantDeclarations: '',
    variantPropTypes: ''
  }
}

const processTheming = theming => {
  if (theming) {
    const themeDefs = Object.entries(theming)
      .map(([name, values]) => {
        const args = Object.entries(values)
          .map(([theme, value]) => {
            return `
              ${theme}: css\`${value}\`
            `
          })
          .join(',')

        return `
          const ${name}Theming = theme('${name}', {
            ${args}      
          })
        `
      })
      .join('')

    const themeDeclarations = Object.keys(theming)
      .map(name => `\${${name}Theming};`)
      .join(`;`)

    return { themeDefs, themeDeclarations }
  }
  return {
    themeDefs: '',
    themeDeclarations: ''
  }
}

const createComponent = ({
  name,
  tag,
  style: { base, theming = undefined, variants = undefined },
  propTypes = undefined,
  defaultProps = undefined
}) => {
  let template = `
    import styled, { css } from 'styled-components'
    import PropTypes from 'prop-types'
  `

  if (theming || variants) {
    template += `import theme from 'styled-theming'
    `
  }

  let { themeDefs, themeDeclarations } = processTheming(theming)

  let { variantDefs, variantDeclarations, variantPropTypes } = processVariants(
    variants
  )

  template += `
    ${themeDefs}
    ${variantDefs}

    const ${name} = styled.${tag}\`
      ${base}${themeDeclarations}${variantDeclarations}
    \`

    ${name}.propTypes = {
      ${variantPropTypes}
    }

    export default ${name}
  `

  return template
}

module.exports = {
  createComponent
}
