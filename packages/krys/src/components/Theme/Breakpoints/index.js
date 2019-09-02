import { connect } from 'react-redux'

import Breakpoints from './Breakpoints'
import { selectBreakpointArray, setBreakpoints } from './reducer'

const mapStateToProps = state => ({
  breakpoints: selectBreakpointArray(state)
})

export default connect(
  mapStateToProps,
  { setBreakpoints }
)(Breakpoints)
