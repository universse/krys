import { connect } from 'react-redux'
import chroma from 'chroma-js'

import ColorInput from './ColorInput'
import {
  selectNode,
  selectNodeStyle,
  editColor,
  editColorOpacity
} from '../../Canvas/nodesReducer'

const mapStateToProps = (state, props) => ({
  color:
    selectNodeStyle(state, props)[props.property] || 'rgba(255, 255, 255, 1)',
  componentRef: selectNode(state, props).componentRef
})

const mergeProps = (
  { color, componentRef },
  dispatchProps,
  { id, label, property }
) => ({
  label,
  hex: chroma(color).hex(),
  opacity: Math.round(chroma(color).alpha() * 100),
  editColor (value) {
    dispatchProps.editColor({ id, value, property, componentRef })
  },
  editColorOpacity (value) {
    dispatchProps.editColorOpacity({ id, value, property, componentRef })
  }
})

export default connect(
  mapStateToProps,
  {
    editColor,
    editColorOpacity
  },
  mergeProps
)(ColorInput)
