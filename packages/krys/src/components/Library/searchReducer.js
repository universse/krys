import reducerRegistry from '../../reducerRegistry'

const reducerName = 'search'
const initialState = ''

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH:
      return payload.search
    default:
      return state
  }
}
reducerRegistry.register(reducerName, reducer)
export default reducer

export const selectSearch = state => state[reducerName]

export const SEARCH = 'SEARCH'

export const search = search => ({
  type: SEARCH,
  payload: {
    search: search.toLowerCase()
  }
})
