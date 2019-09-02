import { connect } from 'react-redux'

import Library from './Library'
import { selectVisibleComponentNames } from './libraryReducer'

const mapStateToProps = state => ({
  visibleComponentNames: selectVisibleComponentNames(state)
})

export default connect(mapStateToProps)(Library)
