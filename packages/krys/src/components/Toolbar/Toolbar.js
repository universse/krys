import React from 'react'

import Tabs from './Tabs'
import { Wrapper } from './styled'

const Toolbar = ({ tabs, selected, onSelect }) => (
  <Wrapper>
    <Tabs tabs={tabs} selected={selected} onSelect={onSelect} />
  </Wrapper>
)

export default Toolbar
