import reducerRegistry from '../../reducerRegistry'
import { reducerName as breakpointsReducer } from '../LeftPane/Theme/Breakpoints/reducer'

const reducerName = 'ui/viewportSize'
const initialState = 0

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_VIEWPORT:
      return payload.viewportSize
    default:
      return state
  }
}
reducerRegistry.register(reducerName, reducer)
export default reducer

export const selectBreakpoints = state =>
  Object.values(state[breakpointsReducer])
export const selectViewportSize = state => state[reducerName]

export const CHANGE_VIEWPORT = 'CHANGE_VIEWPORT'

export const changeViewportSize = viewportSize => ({
  type: CHANGE_VIEWPORT,
  payload: {
    viewportSize
  }
})
