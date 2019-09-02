import reducerRegistry from '../../../../reducerRegistry'

export const reducerName = 'theme/spacing'
const initialState = 0

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state
  }
}
reducerRegistry.register(reducerName, reducer)
export default reducer
