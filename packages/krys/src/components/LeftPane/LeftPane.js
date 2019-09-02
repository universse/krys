import React from 'react'

import Tabs from './Tabs'
import { Pane, Sidebar, Wrapper } from './styled'
import { allTabs, selected, Content, onSelect } from './propTypes'

const LeftPane = ({ tabs: { top, bottom }, selected, Content, onSelect }) => (
  <Wrapper>
    <Sidebar>
      <Tabs tabs={top} selected={selected} onSelect={onSelect} />
      <Tabs tabs={bottom} selected={selected} onSelect={onSelect} />
    </Sidebar>
    {Content && (
      <Pane>
        <Content />
      </Pane>
    )}
  </Wrapper>
)

LeftPane.propTypes = {
  tabs: allTabs,
  selected,
  Content,
  onSelect
}

export default LeftPane
