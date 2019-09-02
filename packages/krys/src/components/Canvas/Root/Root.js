import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Container from './Container'
import Node from '../Node'
import Box from '../Box'
import { withDrop } from '../DragDrop'

class Root extends Component {
  innerRef = instance => {
    this.node = instance
    this.props.rootRef(instance)
  }

  render () {
    const {
      node: { id, style, childNodeIds },
      rootProps,
      translatedX,
      translatedY,
      scale,
      connectDropTarget,
      top,
      left,
      width,
      height
    } = this.props

    return (
      connectDropTarget &&
      connectDropTarget(
        <div style={style} {...rootProps} data-id={id}>
          <Container
            innerRef={this.innerRef}
            translatedX={translatedX}
            translatedY={translatedY}
            scale={scale}
          >
            {childNodeIds &&
              childNodeIds.map(id => (
                <Node rootParentId={id} key={id} id={id} />
              ))}
          </Container>
          <Box top={top} left={left} width={width} height={height} />
        </div>
      )
    )
  }
}

export default withDrop(Root)
