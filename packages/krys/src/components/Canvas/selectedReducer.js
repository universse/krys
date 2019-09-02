import { createSelector } from 'reselect'

import reducerRegistry from '../../reducerRegistry'
import {
  selectAllNodes,
  selectNode,
  selectAllNodeIds,
  getAllDescendantNodeIds,
  getAllAscendantNodeIds,
  REMOVE_SELECTED_NODES
} from './nodesReducer'
import { setTarget } from './targetReducer'

const reducerName = 'canvas/selected'
const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CANVAS_NODES:
      return { ...state, ...action.payload }
    case UNSELECT_CANVAS_NODES:
      const newState = { ...state }
      action.payload.ids.forEach(id => delete newState[id])
      return newState
    case UNSELECT_ALL_CANVAS_NODES:
    case REMOVE_SELECTED_NODES:
      return initialState
    default:
      return state
  }
}
reducerRegistry.register(reducerName, reducer)
export default reducer

export const selectSelectedCanvasNodeIds = state => state[reducerName]
export const makeSelectSelected = () =>
  createSelector(
    [selectNode, selectSelectedCanvasNodeIds],
    ({ id }, selectedNodeIds) => !!selectedNodeIds[id]
  )

export const SELECT_CANVAS_NODES = 'SELECT_CANVAS_NODES'
export const UNSELECT_CANVAS_NODES = 'UNSELECT_CANVAS_NODES'
export const UNSELECT_ALL_CANVAS_NODES = 'UNSELECT_ALL_CANVAS_NODES'

export const selectCanvasNodes = ids => ({
  type: SELECT_CANVAS_NODES,
  payload: ids.reduce((all, id) => ({ ...all, [id]: id }), {})
})

export const unselectCanvasNodes = ids => ({
  type: UNSELECT_CANVAS_NODES,
  payload: { ids }
})

export const unselectAllCanvasNodes = () => ({
  type: UNSELECT_ALL_CANVAS_NODES
})

export const selectCanvasNode = id => (dispatch, getState) => {
  const allNodes = selectAllNodes(getState())
  dispatch(setTarget({ id })) // add bounding box
  const nodeIdsToSelect = [id, ...getAllDescendantNodeIds(allNodes, id)]
  dispatch(selectCanvasNodes(nodeIdsToSelect))
}

export const selectAllCanvasNodes = () => (dispatch, getState) => {
  const allNodeIds = selectAllNodeIds(getState())
  dispatch(selectCanvasNodes(allNodeIds))
}

export const unselectCanvasNode = id => (dispatch, getState) => {
  const state = getState()
  const allNodes = selectAllNodes(state)
  const selectedNodeIds = selectSelectedCanvasNodeIds(state)
  const ascendantNodeIds = getAllAscendantNodeIds(allNodes, id)
  const isAscendantSelected = ascendantNodeIds.reduce(
    (bool, id) => !!selectedNodeIds[id] || bool,
    false
  )
  if (isAscendantSelected) {
    dispatch(unselectAllCanvasNodes()) // remove all bounding boxes
    dispatch(selectCanvasNode(id))
  } else {
    const nodeIdsToUnselect = [id, ...getAllDescendantNodeIds(allNodes, id)]
    dispatch(unselectCanvasNodes(nodeIdsToUnselect))
  }
}
