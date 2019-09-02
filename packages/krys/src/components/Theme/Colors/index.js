import { connect } from 'react-redux'

import Colors from './Colors'
import { selectBrandColorArray, setBrandColors } from './reducer'

const mapStateToProps = state => ({
  brandColors: selectBrandColorArray(state)
})

export default connect(
  mapStateToProps,
  { setBrandColors }
)(Colors)
