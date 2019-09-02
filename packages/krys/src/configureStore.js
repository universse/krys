import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import reducerRegistry from './reducerRegistry'

const combine = (reducers, preloadedState) => {
  const reducerNames = Object.keys(reducers)

  Object.keys(preloadedState).forEach(item => {
    if (reducerNames.indexOf(item) === -1) {
      reducers[item] = (state = null) => state
    }
  })

  return combineReducers(reducers)
}

export default (preloadedState = {}) => {
  const reducer = combine(reducerRegistry.getReducers(), preloadedState)
  const store = createStore(
    reducer,
    preloadedState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
  reducerRegistry.setChangeListener(reducers => {
    store.replaceReducer(combine(reducers))
  })
  return store
}
