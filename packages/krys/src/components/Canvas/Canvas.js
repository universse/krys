import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { Viewport } from './styled'
import Root from './Root'
import Box from './Box'
import CanvasWrapper from './CanvasWrapper'
import CustomDragLayer from './CustomDragLayer'
import { containerProps } from './propTypes'

const Canvas = ({
  handleMouseOver,
  pannable,
  canvasProps,
  translatedX,
  translatedY,
  scale,
  top,
  left,
  width,
  height
}) => (
  <Fragment>
    <Viewport pannable={pannable} onMouseOver={handleMouseOver}>
      <CanvasWrapper pannable={pannable} {...canvasProps} />
      <Root translatedX={translatedX} translatedY={translatedY} scale={scale} />
      <Box top={top} left={left} width={width} height={height} />
    </Viewport>
    <CustomDragLayer scale={scale} />
  </Fragment>
)

// Canvas.propTypes = {
//   containerProps,
//   canvasProps: PropTypes.shape({
//     pannable: PropTypes.bool.isRequired,
//     onMouseEnter: PropTypes.func.isRequired,
//     onMouseLeave: PropTypes.func.isRequired,
//     onMouseDown: PropTypes.func.isRequired,
//     onMouseMove: PropTypes.func.isRequired,
//     onMouseUp: PropTypes.func.isRequired
//   }).isRequired
// }

export default Canvas
