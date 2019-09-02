import { connect } from 'react-redux'

import BorderWeightInput from './BorderWeightInput'
import {
  selectNode,
  selectNodeStyle,
  editStyle
} from '../../Canvas/nodesReducer'

const mapStateToProps = (state, props) => ({
  borderWeight: selectNodeStyle(state, props).borderWidth,
  componentRef: selectNode(state, props).componentRef
})

const mergeProps = ({ borderWeight, componentRef }, dispatchProps, { id }) => {
  return {
    borderWeight,
    editBorderWeight (value) {
      dispatchProps.editStyle({ id, style: { borderWidth: value } })
    }
  }
}

export default connect(
  mapStateToProps,
  {
    editStyle
  },
  mergeProps
)(BorderWeightInput)
