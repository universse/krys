import { connect } from 'react-redux'

import LibraryComponent from './LibraryComponent'
import { makeSelectComponent } from '../libraryReducer'

const makeMapStateToProps = () => {
  const selectComponent = makeSelectComponent()
  return (state, props) => ({
    component: selectComponent(state, props)
  })
}

export default connect(makeMapStateToProps)(LibraryComponent)
