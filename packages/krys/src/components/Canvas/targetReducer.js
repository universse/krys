import reducerRegistry from '../../reducerRegistry'
import { UNSELECT_ALL_CANVAS_NODES } from './selectedReducer'

const reducerName = 'canvas/target'

const initialState = { id: 'root' }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TARGET:
      return action.payload
    // case UNSELECT_ALL_CANVAS_NODES:
    //   return initialState
    default:
      return state
  }
}
reducerRegistry.register(reducerName, reducer)
export default reducer

export const selectTarget = state => state[reducerName]

export const SET_TARGET = 'SET_TARGET'

export const setTarget = ({ id, x, y, startX, startY } = {}) => ({
  type: SET_TARGET,
  payload: { id, x, y, startX, startY }
})
