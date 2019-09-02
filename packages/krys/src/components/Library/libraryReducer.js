import styled from 'react-emotion'
import { combineReducers } from 'redux'
import { createSelector } from 'reselect'

import reducerRegistry from '../../reducerRegistry'
import { selectSearch } from './searchReducer'

const reducerName = 'library'

const byComponentName = (state = {}, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const allComponents = (state = [], action) => {
  switch (action.type) {
    default:
      return state
  }
}

const reducer = combineReducers({
  byComponentName,
  allComponents
})
reducerRegistry.register(reducerName, reducer)
export default reducer

export const selectComponents = state => state[reducerName].byComponentName
export const selectComponent = (state, { componentName }) =>
  state[reducerName].byComponentName[componentName]

export const selectComponentNames = state => state[reducerName].allComponents

export const selectVisibleComponentNames = createSelector(
  [selectComponentNames, selectSearch],
  (componentNames, search) =>
    componentNames.filter(componentName =>
      componentName.toLowerCase().includes(search)
    )
)

export const makeSelectComponent = () =>
  createSelector([selectComponent], ({ name, Tag, style, defaultProps }) => {
    const Component = styled(Tag)(style)
    return { name, Component, defaultProps }
  })
