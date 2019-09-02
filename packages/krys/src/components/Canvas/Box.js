import React from 'react'

import { color } from '../../temp-theme'

const Box = ({ width, height, top, left }) => (
  <div
    style={{
      position: 'fixed',
      width,
      height,
      top,
      left,
      border: `2px solid ${color}`,
      pointerEvents: 'none'
    }}
  />
)

export default Box
