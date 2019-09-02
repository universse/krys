import PropTypes from 'prop-types'

export const propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export const defaultProps = {
  color: 'currentColor',
  size: '24'
}
