import React, { Fragment } from 'react'

import Canvas from '../Canvas'
import LeftPane, { tabs, content } from '../LeftPane'
import RightPane from '../RightPane'

const CanvasView = () => (
  <Fragment>
    <LeftPane tabs={tabs} content={content} />
    <Canvas />
    <RightPane />
  </Fragment>
)

export default CanvasView
