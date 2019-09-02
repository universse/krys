import nanoid from 'nanoid'

import reducerRegistry from '../../reducerRegistry'
import { addNode, addChildNode, setPosition, editStyle } from './nodesReducer'
import {
  selectSelectedCanvasNodeIds,
  selectCanvasNode,
  unselectCanvasNode,
  unselectAllCanvasNodes
} from './selectedReducer'
import { selectTarget, setTarget } from './targetReducer'
import { selectScale } from './zoomReducer'

const reducerName = 'canvas/tool'

export const Tools = {
  MOVE: 'move',
  FRAME: 'frame',
  TEXT: 'text',
  BUTTON: 'button',
  INPUT: 'input',
  IMAGE: 'image',
  ZOOM: 'zoom'
}

const initialState = Tools.MOVE

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOOL:
      return action.payload
    default:
      return state
  }
}
reducerRegistry.register(reducerName, reducer)
export default reducer

export const selectTool = state => state[reducerName]

export const SET_TOOL = 'SET_TOOL'

export const setTool = tool => ({
  type: SET_TOOL,
  payload: tool
})

export const mouseDown = (e, { id, x, y }) => (dispatch, getState) => {
  const state = getState()
  const selectedNodeIds = selectSelectedCanvasNodeIds(state)
  const tool = selectTool(state)
  switch (tool) {
    case Tools.MOVE:
      if (e.shiftKey) {
        id !== 'root' &&
          (selectedNodeIds[id]
            ? dispatch(unselectCanvasNode(id))
            : dispatch(selectCanvasNode(id)))
      } else {
        dispatch(unselectAllCanvasNodes())
        id === 'root'
          ? dispatch(setTarget({ id }))
          : dispatch(selectCanvasNode(id))
      }
      break
    case Tools.FRAME:
      e.preventDefault()
      const startX = e.clientX - x
      const startY = e.clientY - y
      dispatch(setTarget({ id, x, y, startX, startY }))
      break
    default:
      break
  }
}

export const mouseUp = (e, { w, h }) => (dispatch, getState) => {
  const state = getState()
  const tool = selectTool(state)
  const scale = selectScale(state)
  const { id, x, y, startX, startY } = selectTarget(state)
  const { clientX, clientY } = e

  switch (tool) {
    // case Tools.MOVE:
    //   e.stopPropagation()
    //   break
    case Tools.FRAME:
      const endX = clientX - x
      const endY = clientY - y

      if (w < 5 && h < 5) {
        var position = {
          x: startX / scale - 50,
          y: startY / scale - 50,
          r: 0
        }
        var width = 100
        var height = 100
      } else {
        const movementX = endX - startX
        const movementY = endY - startY
        const left = movementX < 0 ? endX : startX
        const top = movementY < 0 ? endY : startY
        position = {
          x: left / scale,
          y: top / scale,
          r: 0
        }
        width = w / scale
        height = h / scale
      }

      const nodeId = nanoid(13)
      dispatch(
        addNode({
          id: nodeId,
          type: 'Frame',
          Tag: 'div',
          style: {
            backgroundColor: 'rgba(255, 255, 255, 1)',
            position: 'absolute',
            top: 0,
            left: 0
          },
          parentNodeId: id
        })
      )
      dispatch(addChildNode({ id, childNodeId: nodeId }))
      dispatch(
        setPosition({
          id: nodeId,
          position
        })
      )
      dispatch(editStyle({ id: nodeId, style: { width, height } }))
      dispatch(unselectAllCanvasNodes())
      dispatch(selectCanvasNode(nodeId))
      dispatch(setTool(Tools.MOVE))
      break
    default:
      break
  }
}
