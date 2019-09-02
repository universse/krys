import { createSelector } from 'reselect'
import nanoid from 'nanoid'
import chroma from 'chroma-js'

import reducerRegistry from '../../reducerRegistry'
import { selectComponents } from '../Library/libraryReducer'
import {
  selectSelectedCanvasNodeIds,
  unselectAllCanvasNodes,
  selectCanvasNode
} from './selectedReducer'
import { setTarget } from './targetReducer'
import { selectScale } from './zoomReducer'
import ItemTypes from '../../ItemTypes'

const reducerName = 'canvas/nodes'

const childNodeIds = (state = [], action) => {
  switch (action.type) {
    case ADD_CHILD_NODE:
      return [...state, action.payload.childNodeId]
    case REMOVE_CHILD_NODE:
      return state.filter(id => id !== action.payload.childNodeId)
    default:
      return state
  }
}

const parentNodeId = (state = null, action) => {
  switch (action.type) {
    case CHANGE_PARENT_NODE:
      return action.payload.parentNodeId
    default:
      return state
  }
}

const color = (state = 'rgba(255, 255, 255, 1)', action) => {
  const { value } = action.payload
  switch (action.type) {
    case EDIT_COLOR:
      const alpha = chroma(state).alpha()
      return chroma(value)
        .alpha(alpha)
        .css()
    case EDIT_COLOR_OPACITY:
      return chroma(state)
        .alpha(value / 100)
        .css()
    default:
      return state
  }
}

const style = (state, action) => {
  switch (action.type) {
    case EDIT_STYLE:
    case EDIT_SHADOWS:
      return { ...state, ...action.payload.style }
    case SET_POSITION:
      const { x, y, r } = action.payload.position
      return {
        ...state,
        transform: `translate3d(${x}px, ${y}px, 0) rotate(${r || 0}deg)`
      }
    case EDIT_COLOR:
    case EDIT_COLOR_OPACITY:
      const { property } = action.payload
      return {
        ...state,
        [property]: color(state[property], action)
      }
    default:
      return state
  }
}

const node = (state, action) => {
  switch (action.type) {
    case ADD_NODE:
      return {
        ...action.payload,
        freeDragging: true,
        childNodeIds: []
      }
    case SET_POSITION:
    case EDIT_STYLE:
    case EDIT_COLOR:
    case EDIT_COLOR_OPACITY:
    case EDIT_SHADOWS:
      return { ...state, style: style(state.style, action) }
    case DETACH_FROM_COMPONENT:
      return state
    case ADD_CHILD_NODE:
    case REMOVE_CHILD_NODE:
      return {
        ...state,
        childNodeIds: childNodeIds(state.childNodeIds, action)
      }
    case CHANGE_PARENT_NODE:
      return {
        ...state,
        parentNodeId: parentNodeId(state.parentNodeId, action)
      }
    default:
      return state
  }
}

const reducer = (state = {}, action) => {
  if (typeof action.payload === 'undefined') {
    return state
  }
  const { id } = action.payload
  if (typeof id === 'undefined') {
    return state
  }

  if (action.type === REMOVE_NODE) {
    const newState = { ...state }
    delete newState[id]
    return newState
  }

  return {
    ...state,
    [id]: node(state[id], action)
  }
}
reducerRegistry.register(reducerName, reducer)
export default reducer

export const getAllDescendantNodeIds = (state, id) =>
  state[id].childNodeIds.reduce(
    (acc, childNodeId) => [
      ...acc,
      childNodeId,
      ...getAllDescendantNodeIds(state, childNodeId)
    ],
    []
  )

export const getAllAscendantNodeIds = (state, id) =>
  [state[id].parentNodeId].reduce((acc, parentNodeId) => {
    return parentNodeId === 'root'
      ? acc
      : [...acc, parentNodeId, ...getAllAscendantNodeIds(state, parentNodeId)]
  }, [])

export const selectAllNodes = state => state[reducerName]
export const selectAllNodeIds = state => {
  const { root, ...allNodeIds } = state[reducerName]
  return Object.keys(allNodeIds)
}
export const selectRootNode = state => state[reducerName].root

export const selectNode = (state, { id }) => state[reducerName][id]
export const makeSelectNode = () =>
  createSelector([selectNode, selectComponents], (node, components) => {
    if (node.componentRef) {
      const { Tag, style, defaultProps } = components[node.componentRef]
      return { ...node, Tag, style: { ...style, ...node.style }, defaultProps }
    }
    if (!node.freeDragging) {
      const {
        position, // probably wrong
        top,
        left,
        transform,
        ...styleWithoutPositioning
      } = node.style
      return { ...node, style: styleWithoutPositioning }
    }
    return node
  })

export const selectNodeStyle = createSelector(
  [selectNode, selectComponents],
  ({ componentRef, style }, components) =>
    componentRef ? { ...components[componentRef].style, ...style } : style
)

export const ADD_NODE = 'ADD_NODE'
export const COPY_NODE = 'COPY_NODE'
export const REMOVE_NODE = 'REMOVE_NODE'
export const REMOVE_SELECTED_NODES = 'REMOVE_SELECTED_NODES'
export const RESET_POSITION = 'RESET_POSITION'
export const EDIT_STYLE = 'EDIT_STYLE'
export const SET_POSITION = 'SET_POSITION'
export const EDIT_COLOR = 'EDIT_COLOR'
export const EDIT_COLOR_OPACITY = 'EDIT_COLOR_OPACITY'
export const EDIT_SHADOWS = 'EDIT_SHADOWS'
export const DETACH_FROM_COMPONENT = 'DETACH_FROM_COMPONENT' // todo
export const ADD_CHILD_NODE = 'ADD_CHILD_NODE'
export const REMOVE_CHILD_NODE = 'REMOVE_CHILD_NODE'
export const CHANGE_PARENT_NODE = 'CHANGE_PARENT_NODE'

export const addNode = ({
  id,
  type,
  Tag = null,
  style = {
    position: 'absolute',
    top: 0,
    left: 0
  },
  componentRef = null,
  parentNodeId
}) => ({
  type: ADD_NODE,
  payload: { id, type, Tag, style, componentRef, parentNodeId }
})

export const copyNode = ({ id, position }) => ({
  type: COPY_NODE,
  payload: { id, position }
})

export const removeNode = ({ id }) => ({
  type: REMOVE_NODE,
  payload: { id }
})

export const resetPosition = ({ id }) => ({
  type: RESET_POSITION,
  payload: { id }
})

export const editStyle = ({ id, style }) => ({
  type: EDIT_STYLE,
  payload: { id, style }
})

export const setPosition = ({ id, position }) => ({
  type: SET_POSITION,
  payload: { id, position }
})

export const editColor = ({ id, property, value, componentRef }) => ({
  type: EDIT_COLOR,
  payload: { id, property, value, componentRef }
})

export const editColorOpacity = ({ id, property, value, componentRef }) => ({
  type: EDIT_COLOR_OPACITY,
  payload: { id, property, value, componentRef }
})

export const editShadows = ({ id, shadows }) => ({
  type: EDIT_SHADOWS,
  payload: {
    id,
    style: {
      boxShadow: shadows
        .map(
          ({ x, y, blur, spread, hex, opacity, inset }) =>
            `${x}px ${y}px ${blur}px ${spread}px ${chroma(hex)
              .alpha(opacity / 100)
              .css()}${inset ? ' inset' : ''}`
        )
        .join(',')
    }
  }
})

export const detachFromComponent = ({ id }) => ({
  type: DETACH_FROM_COMPONENT,
  payload: { id }
})

export const addChildNode = ({ id, childNodeId }) => ({
  type: ADD_CHILD_NODE,
  payload: { id, childNodeId }
})

export const removeChildNode = ({ id, childNodeId }) => ({
  type: REMOVE_CHILD_NODE,
  payload: { id, childNodeId }
})

export const changeParentNode = ({ id, parentNodeId }) => ({
  type: CHANGE_PARENT_NODE,
  payload: { id, parentNodeId }
})

export const deleteSelectedNodes = () => (dispatch, getState) => {
  const state = getState()
  const selectedNodeIds = Object.keys(selectSelectedCanvasNodeIds(state))

  dispatch(setTarget({ id: 'root' }))
  selectedNodeIds.forEach(id => {
    const { parentNodeId } = selectNode(state, { id })
    dispatch(removeChildNode({ id: parentNodeId, childNodeId: id }))
  })

  selectedNodeIds.forEach(id => dispatch(removeNode({ id })))
  dispatch({ type: REMOVE_SELECTED_NODES })
}

export const moveNode = (item, x, y) => (dispatch, getState) => {
  const scale = selectScale(getState())

  dispatch(
    setPosition({
      id: item.id,
      position: {
        x: Math.ceil(x / scale + item.x),
        y: Math.ceil(y / scale + item.y),
        r: item.r
      }
    })
  )
}

export const dropNode = (id, monitor, component) => (dispatch, getState) => {
  const scale = selectScale(getState())
  const item = monitor.getItem()
  const itemType = monitor.getItemType()
  let node
  try {
    node = component.getDecoratedComponentInstance().node
  } catch (e) {
    node = component.node
  }
  const { top, left } = node.getBoundingClientRect()
  const { x: clientX, y: clientY } = monitor.getClientOffset()
  const { x: mouseX, y: mouseY } = monitor.getInitialClientOffset()
  const { x: sourceX, y: sourceY } = monitor.getInitialSourceClientOffset()

  if (itemType === ItemTypes.COMPONENT) {
    const nodeId = nanoid(13)

    dispatch(
      addNode({
        id: nodeId,
        ...item,
        parentNodeId: id
      })
    )
    dispatch(
      setPosition({
        id: nodeId,
        position: {
          x: Math.ceil((clientX - left - mouseX + sourceX) / scale),
          y: Math.ceil((clientY - top - mouseY + sourceY) / scale),
          r: 0
        }
      })
    )
    dispatch(addChildNode({ id, childNodeId: nodeId }))
    dispatch(unselectAllCanvasNodes())
    dispatch(selectCanvasNode(nodeId))
  } else {
    if (id !== item.parentNodeId) {
      dispatch(removeChildNode({ id: item.parentNodeId, childNodeId: item.id }))
      dispatch(changeParentNode({ id: item.id, parentNodeId: id }))
      dispatch(addChildNode({ id, childNodeId: item.id }))
      dispatch(
        setPosition({
          id: item.id,
          position: {
            x: Math.ceil((clientX - left - mouseX + sourceX) / scale),
            y: Math.ceil((clientY - top - mouseY + sourceY) / scale),
            r: item.r
          }
        })
      )
    }
    dispatch(unselectAllCanvasNodes())
    dispatch(selectCanvasNode(item.id))
  }
}
