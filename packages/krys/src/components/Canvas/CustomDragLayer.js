import React from 'react'
import { DragLayer } from 'react-dnd'

import ItemTypes from '../../ItemTypes'
import LibraryComponent from '../Library/LibraryComponent'
// // import { snapToGrid } from './utils'

const layerStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 3,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%'
}

const getItemStyles = ({ currentOffset, itemType, scale }) => {
  // const initialOffset
  // if (!initialOffset || !currentOffset) {
  if (!currentOffset) {
    return {
      display: 'none'
    }
  }
  const { x: currentX, y: currentY } = currentOffset
  // if (props.snapToGrid) {
  // 	x -= initialOffset.x
  // 	y -= initialOffset.y
  // 	;[x, y] = snapToGrid(x, y)
  // 	x += initialOffset.x
  // 	y += initialOffset.y
  // }

  const newTranslatedX = currentX
  const newTranslatedY = currentY

  return {
    transform: `translate3d(${newTranslatedX}px, ${newTranslatedY}px, 0) scale(${scale})`,
    transformOrigin: '0 0 0'
  }
}

const collect = monitor => ({
  item: monitor.getItem(),
  itemType: monitor.getItemType(),
  // initialOffset: monitor.getInitialSourceClientOffset(),
  currentOffset: monitor.getSourceClientOffset(),
  isDragging: monitor.isDragging()
})

const renderItem = (item, itemType) => {
  switch (itemType) {
    case ItemTypes.COMPONENT:
      return <LibraryComponent componentName={item.componentRef} />
    default:
      return null
  }
}

const CustomDragLayer = props => {
  const { item, itemType, isDragging } = props

  return isDragging ? (
    <div style={layerStyles}>
      <div style={getItemStyles(props)}>{renderItem(item, itemType)}</div>
    </div>
  ) : null
}

export default DragLayer(collect)(CustomDragLayer)
