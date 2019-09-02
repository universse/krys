import React from 'react'

import { Box } from '../common'
import { PaneLabel, PaneWrapper } from './styled'
import BorderStyleInput from './BorderStyleInput'
import BorderWeightInput from './BorderWeightInput'
import ColorInput from './ColorInput'

const BorderEditor = ({ id }) => (
  <PaneWrapper>
    <Box margin='0 0 12px'>
      <PaneLabel>border</PaneLabel>
    </Box>
    <BorderWeightInput id={id} />
    <BorderStyleInput id={id} />
    <ColorInput id={id} property='borderColor' />
  </PaneWrapper>
)

export default BorderEditor
