import React from 'react'

import { Box } from '../common'
import { PaneLabel, PaneWrapper } from './styled'
import ColorInput from './ColorInput'

const ColorEditor = ({ id, label, property }) => (
  <PaneWrapper>
    <Box margin='0 0 12px'>
      <PaneLabel>{label}</PaneLabel>
    </Box>
    <ColorInput id={id} property={property} />
  </PaneWrapper>
)

export default ColorEditor
