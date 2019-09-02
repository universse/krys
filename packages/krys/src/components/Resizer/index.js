import { connect } from 'react-redux'

import Resizer from './Resizer'
import {
  selectBreakpoints,
  selectViewportSize,
  changeViewportSize
} from './reducer'

const mapStateToProps = state => ({
  breakpoints: selectBreakpoints(state),
  viewportSize: selectViewportSize(state)
})

export default connect(mapStateToProps, { changeViewportSize })(Resizer)
