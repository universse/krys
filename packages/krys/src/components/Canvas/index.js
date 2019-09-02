import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import Canvas from './Canvas'
import { deleteSelectedNodes } from './nodesReducer'
import { selectAllCanvasNodes } from './selectedReducer'
import { setTool, Tools } from './toolReducer'
import { setZoom } from './zoomReducer'
import { toolbarHeight, leftbarWidth, rightpaneWidth } from '../../temp-theme'

class CanvasContainer extends PureComponent {
  state = {
    mouseEntered: false,
    pannable: false,
    panning: false,
    lastX: 0,
    lastY: 0,
    translatedX: 0,
    translatedY: 0,
    zoom: 100,
    top: 0,
    left: 0,
    width: 0,
    height: 0
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.zoom !== this.state.zoom) {
      this.setState({ top: 0, left: 0, width: 0, height: 0 })
    }
  }

  minZoom = 2
  maxZoom = 25600
  keys = [' ', '0', '-', '=', 'Escape', 'v', 'f', 't', 'Delete', 'a']
  center = {
    x: (window.innerWidth - leftbarWidth - rightpaneWidth) / 2 + leftbarWidth,
    y: (window.innerHeight - toolbarHeight) / 2 + toolbarHeight
  }

  getZoom (zoom) {
    return Math.max(this.minZoom, Math.min(this.maxZoom, zoom))
  }

  calculateNewTranslated = (newZoom, clientX, clientY) => {
    const { translatedX, translatedY, zoom } = this.state

    const zoomRatio = newZoom / zoom

    const originX = 40 + translatedX
    const originY = 40 + translatedY

    const focalX = clientX - originX
    const focalY = clientY - originY

    const focalPointDeltaX = zoomRatio * focalX - focalX
    const focalPointDeltaY = zoomRatio * focalY - focalY

    return {
      x: translatedX - focalPointDeltaX,
      y: translatedY - focalPointDeltaY
    }
  }

  componentDidMount () {
    window.addEventListener('keydown', this.handleKeyDown)
    window.addEventListener('keyup', this.handleKeyUp)
    window.addEventListener('wheel', this.handleWheel)
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.handleKeyDown)
    window.removeEventListener('keyup', this.handleKeyUp)
    window.removeEventListener('wheel', this.handleWheel)
  }

  handleWheel = e => {
    if (e.ctrlKey) {
      e.preventDefault()
      const { zoom } = this.state
      const { setZoom } = this.props
      const { deltaY, clientX, clientY } = e
      const zoomDelta = deltaY > 0 ? 2.5 : -2.5

      const newZoom = this.getZoom(Math.round(zoom - zoomDelta))

      const { x, y } = this.calculateNewTranslated(newZoom, clientX, clientY)

      this.setState(
        {
          zoom: newZoom,
          translatedX: x,
          translatedY: y
        },
        () => setZoom(newZoom)
      )
    }
  }

  handleKeyDown = e => {
    if (e.target.tagName === 'INPUT') return
    if (!this.keys.includes(e.key)) return
    if (e.ctrlKey) {
      e.preventDefault()
      const { zoom } = this.state
      const { selectAllCanvasNodes, setZoom } = this.props

      let newZoom
      switch (e.key) {
        case '-':
          newZoom = this.getZoom(zoom / 2)
          break
        case '=':
          newZoom = this.getZoom(zoom * 2)
          break
        case '0':
          newZoom = 100
          break
        case 'a':
          selectAllCanvasNodes()
          return
        default:
          return
      }

      const { x, y } = this.calculateNewTranslated(
        newZoom,
        this.center.x,
        this.center.y
      )

      this.setState(
        {
          zoom: newZoom,
          translatedX: x,
          translatedY: y
        },
        () => setZoom(newZoom)
      )
    } else {
      const { deleteSelectedNodes, setTool } = this.props
      switch (e.key) {
        case ' ':
          !this.state.pannable && this.setState({ pannable: true })
          break
        case 'v':
          setTool(Tools.MOVE)
          break
        case 'f':
          setTool(Tools.FRAME)
          break
        case 't':
          setTool(Tools.TEXT)
          break
        case 'Delete':
          deleteSelectedNodes()
          break
        case 'Escape':
          setTool(Tools.MOVE)
          break
        default:
          break
      }
    }
  }

  handleKeyUp = e => {
    if (e.keyCode !== 32) return
    this.setState({ pannable: false })
  }

  handleMouseEnter = () => {
    this.setState({ mouseEntered: true })
  }

  handleMouseLeave = () => {
    this.setState({ mouseEntered: false })
  }

  handleMouseDown = e => {
    if (!this.state.pannable || !this.state.mouseEntered) return

    const { clientX, clientY } = e
    this.setState({
      panning: true,
      lastX: clientX,
      lastY: clientY
    })
  }

  handleMouseOver = e => {
    const id = e.target.dataset.id
    if (!id || id === 'root') {
      this.setState({
        top: 0,
        left: 0,
        width: 0,
        height: 0
      })
    } else {
      const { width, height, top, left } = e.target.getBoundingClientRect()
      this.setState({
        width,
        height,
        top,
        left
      })
    }
  }

  handleMouseMove = e => {
    if (!this.state.pannable || !this.state.panning) return

    const { lastX, lastY, translatedX, translatedY } = this.state
    const { clientX, clientY } = e
    this.setState({
      lastX: clientX,
      lastY: clientY,
      translatedX: translatedX + clientX - lastX,
      translatedY: translatedY + clientY - lastY
    })
  }

  handleMouseUp = e => {
    this.setState({ panning: false })
  }

  canvasProps = {
    onMouseEnter: this.handleMouseEnter,
    onMouseLeave: this.handleMouseLeave,
    onMouseDown: this.handleMouseDown,
    onMouseMove: this.handleMouseMove,
    onMouseUp: this.handleMouseUp
  }

  render () {
    const {
      pannable,
      translatedX,
      translatedY,
      zoom,
      top,
      left,
      width,
      height
    } = this.state

    return (
      <Canvas
        handleMouseOver={this.handleMouseOver}
        pannable={pannable}
        canvasProps={this.canvasProps}
        translatedX={translatedX}
        translatedY={translatedY}
        scale={zoom / 100}
        top={top}
        left={left}
        width={width}
        height={height}
      />
    )
  }
}

export default connect(null, {
  deleteSelectedNodes,
  selectAllCanvasNodes,
  setTool,
  setZoom
})(CanvasContainer)
