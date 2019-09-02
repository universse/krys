import { connect } from 'react-redux'

import Node from './Node'
import { makeSelectNode, editStyle, moveNode, dropNode } from '../nodesReducer'
import { transformToValues } from '../../StyleEditor/utils'

const makeMapStateToProps = () => {
  const selectNode = makeSelectNode()

  return (state, props) => ({
    node: selectNode(state, props)
  })
}

const mergeProps = ({ node }, dispatchProps, ownProps) => {
  const { x, y, r } = transformToValues(node.style.transform)
  return {
    node,
    position: { x, y, r },
    ...dispatchProps,
    ...ownProps
  }
}

export default connect(
  makeMapStateToProps,
  {
    editStyle,
    dropNode,
    moveNode
  },
  mergeProps
)(Node)
