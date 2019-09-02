import { connect } from 'react-redux'

import RotationInput from './RotationInput'
import {
  selectNode,
  selectNodeStyle,
  setPosition
} from '../../Canvas/nodesReducer'
import { transformToValues } from '../utils'

const mapStateToProps = (state, props) => ({
  transform: selectNodeStyle(state, props).transform,
  componentRef: selectNode(state, props).componentRef
})

const mergeProps = ({ transform, componentRef }, dispatchProps, { id }) => {
  const { x, y, r } = transformToValues(transform)
  return {
    r,
    setR (value) {
      dispatchProps.setPosition({ id, position: { x, y, r: value } })
    }
  }
}

export default connect(
  mapStateToProps,
  {
    setPosition
  },
  mergeProps
)(RotationInput)
