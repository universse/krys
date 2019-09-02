import React from 'react'
import { propTypes, defaultProps } from './propTypes'

export const Library = ({ color, size }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 512 512'
    width={size}
    height={size}
    fill={color}
  >
    <path d='M96 176h80V96H96v80zm120 240h80v-80h-80v80zm-120 0h80v-80H96v80zm0-120h80v-80H96v80zm120 0h80v-80h-80v80zM336 96v80h80V96h-80zm-120 80h80V96h-80v80zm120 120h80v-80h-80v80zm0 120h80v-80h-80v80z' />
  </svg>
)

Library.propTypes = propTypes
Library.defaultProps = defaultProps
