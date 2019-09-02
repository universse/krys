import { DropTarget } from 'react-dnd'

import ItemTypes from '../../../ItemTypes'

const target = {
  drop ({ node: { id }, dropNode }, monitor, component) {
    if (monitor.didDrop()) return
    if (this.frame) {
      cancelAnimationFrame(this.frame)
      this.frame = null
    }
    dropNode(id, monitor, component)
  },
  hover ({ moveNode }, monitor) {
    if (monitor.getItemType() === ItemTypes.COMPONENT) return

    if (this.frame) {
      cancelAnimationFrame(this.frame)
      this.frame = null
    }

    const { x, y } = monitor.getDifferenceFromInitialOffset()
    this.frame = requestAnimationFrame(() => moveNode(monitor.getItem(), x, y))
  }
}

const collect = connect => ({
  connectDropTarget: connect.dropTarget()
})

export const withDrop = DropTarget(
  [ItemTypes.COMPONENT, ItemTypes.NODE],
  target,
  collect
)
