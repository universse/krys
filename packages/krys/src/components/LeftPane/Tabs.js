import React from 'react'

import { Button, List } from './styled'
import { tabs, selected, onSelect } from './propTypes'
import { color, black300 } from '../../temp-theme'

const Tabs = ({ tabs, selected, onSelect }) => (
  <List>
    {tabs &&
      tabs.map(({ id, Icon }) => (
        <li key={id}>
          <Button
            type='button'
            selected={id === selected}
            onClick={() => onSelect(id)}
          >
            <Icon size='20' color={id === selected ? color : black300} />
          </Button>
        </li>
      ))}
  </List>
)

Tabs.propTypes = {
  tabs,
  selected,
  onSelect
}

export default Tabs
