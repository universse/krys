import PropTypes from 'prop-types'

export const content = PropTypes.object.isRequired

export const tabs = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number.isRequired,
    Icon: PropTypes.func.isRequired
  })
)

export const allTabs = PropTypes.shape({
  top: tabs,
  bottom: tabs
}).isRequired

export const selected = PropTypes.number

export const onSelect = PropTypes.func.isRequired

export const Content = PropTypes.func
