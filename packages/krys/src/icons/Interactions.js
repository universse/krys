import React from 'react'
import { propTypes, defaultProps } from './propTypes'

export const Interactions = ({ color, size }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 512 512'
    width={size}
    height={size}
    fill={color}
  >
    <path d='M160 48v224h64v192l128-256h-64l64-160H160z' />
  </svg>
)

Interactions.propTypes = propTypes
Interactions.defaultProps = defaultProps
