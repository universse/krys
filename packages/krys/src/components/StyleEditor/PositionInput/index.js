import { connect } from 'react-redux'

import PositionInput from './PositionInput'
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
    x,
    y,
    setX (value) {
      dispatchProps.setPosition({ id, position: { x: value, y, r } })
    },
    setY (value) {
      dispatchProps.setPosition({ id, position: { x, y: value, r } })
    }
  }
}

export default connect(
  mapStateToProps,
  {
    setPosition
  },
  mergeProps
)(PositionInput)
