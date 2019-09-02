function getThemeValue (name, props, values) {
  const value = props.theme && props.theme[name]
  return value && values[value]
}

export function theme (name, values) {
  return function (props) {
    return getThemeValue(name, props, values)
  }
}

theme.variants = function (name, prop, values) {
  return function (props) {
    let variant = props[prop] && values[props[prop]]
    return variant && getThemeValue(name, props, variant)
  }
}

export function adapt (prop, values) {
  return function (props) {
    const value = props[prop]
    return value && values[value]
  }
}
