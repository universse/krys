import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getEmptyImage } from 'react-dnd-html5-backend'

import ConnectedNode from './'
import { withDrag, withDrop } from '../DragDrop'

class Node extends Component {
  state = {
    pointerEvents: 'inherit'
  }

  toggleDroppable = () => {
    this.setState({
      pointerEvents: this.state.pointerEvents === 'inherit' ? 'none' : 'inherit'
    })
  }

  componentDidMount () {
    const { connectDragPreview } = this.props
    if (connectDragPreview) {
      connectDragPreview(getEmptyImage(), {
        captureDraggingState: true
      })
    }
  }

  ref = instance => {
    this.node = instance
  }

  render () {
    const {
      node: { id, Tag, style, defaultProps, childNodeIds },
      connectDragSource,
      connectDropTarget,
      rootParentId
    } = this.props

    return connectDropTarget(
      connectDragSource(
        <Tag
          css={style}
          style={this.state}
          ref={this.ref}
          // contentEditable
          data-id={id}
        >
          {childNodeIds.map(id => (
            <ConnectedNode rootParentId={rootParentId} key={id} id={id} />
          ))}
          {defaultProps && defaultProps.children}
        </Tag>
      )
    )
  }
}

export default withDrop(withDrag(Node))

Node.propTypes = {
  node: PropTypes.shape({
    id: PropTypes.string.isRequired,
    childNodeIds: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  connectDragSource: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired
}
