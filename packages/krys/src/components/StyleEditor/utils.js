import chroma from 'chroma-js'

export const transformToValues = transform => {
  if (!transform) return {}
  const [, x, y, , r] = transform.match(/-?\d+/g).map(num => parseInt(num, 10))

  return {
    x,
    y,
    r: r || 0
  }
}

export const shadowsToValues = shadows => {
  if (!shadows) return []

  const shadowArray = shadows.split(/,(?![^(]*\))/)
  return shadowArray.map(shadow => {
    const inset = shadow.includes('inset')

    const [x, y, blur, spread] = shadow
      .match(/-?\d+/g)
      .map(num => parseInt(num, 10))

    const color = shadow.slice(shadow.indexOf('rgb'), shadow.indexOf(')') + 1)
    const hex = chroma(color).hex()
    const opacity = Math.round(chroma(color).alpha() * 100)

    return {
      x,
      y,
      blur,
      spread,
      hex,
      opacity,
      inset
    }
  })
}
