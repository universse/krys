import React, { Component } from 'react'
import { DragSource } from 'react-dnd'
import { getEmptyImage } from 'react-dnd-html5-backend'

import ItemTypes from '../../../ItemTypes'

const source = {
  beginDrag ({ component: { name } }, monitor, component) {
    return {
      type: 'Element',
      componentRef: name
    }
  }
}

const collect = (connect, monitor) => ({
  connectDragPreview: connect.dragPreview(),
  connectDragSource: connect.dragSource()
})

class LibraryComponent extends Component {
  componentDidMount () {
    const { connectDragPreview } = this.props
    if (connectDragPreview) {
      connectDragPreview(getEmptyImage(), {
        captureDraggingState: false
      })
    }
  }

  innerRef = instance => {
    const { connectDragSource } = this.props
    connectDragSource(instance)
  }

  render () {
    const { component: { Component, defaultProps } } = this.props
    return <Component innerRef={this.innerRef} {...defaultProps} />
  }
}

export default DragSource(ItemTypes.COMPONENT, source, collect)(
  LibraryComponent
)
