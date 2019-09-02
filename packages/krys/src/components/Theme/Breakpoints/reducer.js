import reducerRegistry from '../../../reducerRegistry'
import { createSelector } from 'reselect'

export const reducerName = 'theme/breakpoints'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SET_BREAKPOINTS:
      return action.payload.reduce((breakpoints, { name, breakpoint }) => {
        breakpoints[name] = breakpoint
        return breakpoints
      }, {})
    default:
      return state
  }
}
reducerRegistry.register(reducerName, reducer)
export default reducer

export const selectBreakpoints = state => state[reducerName]
export const selectBreakpointArray = createSelector(
  [selectBreakpoints],
  breakpoints =>
    Object.entries(breakpoints).map(([name, breakpoint]) => ({
      name,
      breakpoint
    }))
)

export const SET_BREAKPOINTS = 'SET_BREAKPOINTS'

export const setBreakpoints = breakpoints => ({
  type: SET_BREAKPOINTS,
  payload: breakpoints
})
