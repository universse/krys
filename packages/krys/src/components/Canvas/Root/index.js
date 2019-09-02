import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import Root from './Root'
import { selectRootNode, moveNode, dropNode } from '../nodesReducer'
import { mouseDown, mouseUp } from '../toolReducer'

class RootContainer extends PureComponent {
  state = {
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    startX: 0,
    startY: 0,
    started: false
  }

  rootRef = instance => (this.root = instance)

  handleMouseDown = e => {
    if (e.button !== 0) return
    const id = e.target.dataset.id
    if (!id) return
    if (!e.defaultPrevented) {
      const target = id === 'root' ? this.root : e.target
      const { top, left } = target.getBoundingClientRect()
      this.props.mouseDown(e, {
        id,
        x: left,
        y: top
      })
    }
    ;(id === 'root' || e.defaultPrevented) &&
      this.setState({
        started: true,
        startX: e.clientX,
        startY: e.clientY
      })
  }

  handleMouseMove = e => {
    if (!this.state.started) return
    const { startX, startY } = this.state
    const { clientX, clientY } = e
    const top = clientY - startY < 0 ? clientY : startY
    const left = clientX - startX < 0 ? clientX : startX

    // for (const node of this.root.childNodes) {
    //   console.log(node.getBoundingClientRect())
    // }

    this.setState({
      width: Math.abs(clientX - startX),
      height: Math.abs(clientY - startY),
      top,
      left
    })
  }

  handleMouseUp = e => {
    if (e.button !== 0) return
    const { width, height } = this.state

    this.props.mouseUp(e, {
      w: width,
      h: height
    })

    this.setState({
      started: false,
      width: 0,
      height: 0,
      top: 0,
      left: 0
    })
  }

  rootProps = {
    onMouseDown: this.handleMouseDown,
    onMouseMove: this.handleMouseMove,
    onMouseUp: this.handleMouseUp
  }

  render () {
    const { top, left, width, height } = this.state
    return (
      <Root
        {...this.props}
        rootRef={this.rootRef}
        rootProps={this.rootProps}
        top={top}
        left={left}
        width={width}
        height={height}
      />
    )
  }
}

const mapStateToProps = state => ({
  node: selectRootNode(state)
})

export default connect(
  mapStateToProps,
  {
    dropNode,
    moveNode,
    mouseDown,
    mouseUp
  }
)(RootContainer)
