import React, { Fragment } from 'react'

import Toolbar from '../Toolbar'

const Views = ({ tabs, selected, View, onSelect }) => (
  <Fragment>
    <Toolbar tabs={tabs} selected={selected} onSelect={onSelect} />
    {View && <View />}
  </Fragment>
)

export default Views
