import reducerRegistry from '../../reducerRegistry'

const reducerName = 'canvas/zoom'
const initialState = 100

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ZOOM:
      return action.payload
    default:
      return state
  }
}
reducerRegistry.register(reducerName, reducer)
export default reducer

export const selectZoom = state => state[reducerName]
export const selectScale = state => state[reducerName] / 100

export const SET_ZOOM = 'SET_ZOOM'

export const setZoom = zoom => ({
  type: SET_ZOOM,
  payload: zoom
})
