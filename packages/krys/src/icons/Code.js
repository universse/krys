import React from 'react'
import { propTypes, defaultProps } from './propTypes'

export const Code = ({ color, size }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 512 512'
    width={size}
    height={size}
    fill={color}
  >
    <path d='M190.4 354.1L91.9 256l98.4-98.1-30-29.9L32 256l128.4 128 30-29.9zm131.2 0L420 256l-98.4-98.1 30-29.9L480 256 351.6 384l-30-29.9z' />
  </svg>
)

Code.propTypes = propTypes
Code.defaultProps = defaultProps

export default Code
