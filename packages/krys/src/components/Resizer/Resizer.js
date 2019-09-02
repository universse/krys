import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'
import Selector from './Selector'

const Resizer = ({ breakpoints, changeViewportSize, viewportSize }) => (
  <Wrapper>
    {breakpoints &&
      breakpoints.map(breakpoint => (
        <Selector
          key={breakpoint}
          w={breakpoint}
          active={breakpoint <= viewportSize}
          onClick={() => changeViewportSize(breakpoint)}
        />
      ))}
  </Wrapper>
)

Resizer.propTypes = {
  breakpoints: PropTypes.arrayOf(PropTypes.number).isRequired,
  changeViewportSize: PropTypes.func.isRequired,
  viewportSize: PropTypes.number.isRequired
}

export default Resizer
