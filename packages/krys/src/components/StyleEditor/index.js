import { connect } from 'react-redux'

import StyleEditor from './StyleEditor'
import { selectTarget } from '../Canvas/targetReducer'

const mapStateToProps = state => ({
  targetId: selectTarget(state).id
})

export default connect(mapStateToProps)(StyleEditor)
