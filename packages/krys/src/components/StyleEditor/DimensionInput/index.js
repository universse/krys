import { connect } from 'react-redux'

import DimensionInput from './DimensionInput'
import {
  selectNode,
  selectNodeStyle,
  editStyle
} from '../../Canvas/nodesReducer'

const mapStateToProps = (state, props) => ({
  w: selectNodeStyle(state, props).width,
  h: selectNodeStyle(state, props).height,
  componentRef: selectNode(state, props).componentRef
})

const mergeProps = ({ w, h, componentRef }, dispatchProps, { id }) => {
  return {
    w,
    h,
    setW (value) {
      dispatchProps.editStyle({ id, style: { width: value } })
    },
    setH (value) {
      dispatchProps.editStyle({ id, style: { height: value } })
    }
  }
}

export default connect(
  mapStateToProps,
  {
    editStyle
  },
  mergeProps
)(DimensionInput)
