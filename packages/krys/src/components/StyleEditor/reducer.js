import reducerRegistry from '../../../reducerRegistry'

const reducerName = 'style'
const initialState = {}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state
  }
}
reducerRegistry.register(reducerName, reducer)
export default reducer
