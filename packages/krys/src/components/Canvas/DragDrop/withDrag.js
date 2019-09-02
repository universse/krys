import { DragSource } from 'react-dnd'

import ItemTypes from '../../../ItemTypes'

const source = {
  beginDrag (
    {
      node: { id, parentNodeId },
      position: { x, y, r },
      rootParentId,
      editStyle
    },
    _,
    component
  ) {
    editStyle({ id: rootParentId, style: { zIndex: 1 } })
    setTimeout(() => component.toggleDroppable(), 0)
    return {
      id,
      x,
      y,
      r,
      parentNodeId
    }
  },
  endDrag ({ rootParentId, editStyle }, __, component) {
    editStyle({ id: rootParentId, style: { zIndex: null } })
    component && component.toggleDroppable()
  },
  canDrag ({ node: { freeDragging } }) {
    return freeDragging
  }
}

const dragCollect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging()
})

export const withDrag = DragSource(ItemTypes.NODE, source, dragCollect)
