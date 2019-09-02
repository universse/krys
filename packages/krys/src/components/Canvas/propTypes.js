import PropTypes from 'prop-types'

export const zoom = PropTypes.number.isRequired

export const containerProps = PropTypes.shape({
  translatedX: PropTypes.number.isRequired,
  translatedY: PropTypes.number.isRequired
}).isRequired
