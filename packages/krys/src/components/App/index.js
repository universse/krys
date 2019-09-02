import React from 'react'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import PropTypes from 'prop-types'

import Grid from './Grid'
import Views, { tabs, views } from '../Views'

const App = () => (
  <Grid>
    <Views tabs={tabs} defaultTab={1} views={views} />
  </Grid>
)

export default DragDropContext(HTML5Backend)(App)
