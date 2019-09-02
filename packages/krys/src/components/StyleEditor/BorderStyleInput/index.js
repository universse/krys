import { connect } from 'react-redux'

import BorderStyleInput from './BorderStyleInput'
import {
  selectNode,
  selectNodeStyle,
  editStyle
} from '../../Canvas/nodesReducer'

const mapStateToProps = (state, props) => ({
  borderStyle: selectNodeStyle(state, props).borderStyle,
  componentRef: selectNode(state, props).componentRef
})

const mergeProps = ({ borderStyle, componentRef }, dispatchProps, { id }) => {
  return {
    borderStyle,
    editBorderStyle (e) {
      dispatchProps.editStyle({ id, style: { borderStyle: e.target.value } })
    }
  }
}

export default connect(
  mapStateToProps,
  {
    editStyle
  },
  mergeProps
)(BorderStyleInput)
