import { connect } from 'react-redux'

import ShadowsInput from './ShadowsInput'
import {
  selectNode,
  selectNodeStyle,
  editShadows
} from '../../Canvas/nodesReducer'
import { shadowsToValues } from '../utils'

const mapStateToProps = (state, props) => ({
  boxShadow: selectNodeStyle(state, props).boxShadow,
  componentRef: selectNode(state, props).componentRef
})

const mergeProps = ({ boxShadow, componentRef }, dispatchProps, { id }) => {
  const shadows = shadowsToValues(boxShadow)

  return {
    shadows,
    editShadow (value, index, property) {
      dispatchProps.editShadows({
        id,
        shadows: shadows.map(
          (shadow, i) =>
            index === i ? { ...shadows[index], [property]: value } : shadow
        )
      })
    },
    addShadow () {
      dispatchProps.editShadows({
        id,
        shadows: shadows.concat({
          x: 0,
          y: 2,
          blur: 4,
          spread: 0,
          hex: '#000',
          opacity: 50,
          inset: false
        })
      })
    },
    removeShadow (index) {
      dispatchProps.editShadows({
        id,
        shadows: shadows.filter((_, i) => i !== index)
      })
    }
  }
}

export default connect(
  mapStateToProps,
  { editShadows },
  mergeProps
)(ShadowsInput)
