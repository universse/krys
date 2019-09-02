import React from 'react'

import { Button, ButtonText, List, ListItem } from './styled'
// import { tabs, selected, onSelect } from './propTypes'

const Tabs = ({ tabs, selected, onSelect }) => (
  <List>
    {tabs &&
      tabs.map(({ id, title }) => (
        <ListItem key={id}>
          <Button
            type='button'
            selected={id === selected}
            onClick={() => onSelect(id)}
          >
            <ButtonText selected={id === selected}>{title}</ButtonText>
          </Button>
        </ListItem>
      ))}
  </List>
)

// Tabs.propTypes = {
//   tabs,
//   selected,
//   onSelect
// }

export default Tabs
