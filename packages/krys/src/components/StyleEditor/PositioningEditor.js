import React from 'react'

import { Box } from '../common'
import { PaneLabel, PaneWrapper } from './styled'
import PositionInput from './PositionInput'
import DimensionInput from './DimensionInput'
import RotationInput from './RotationInput'

const PositioningEditor = ({ id }) => (
  <PaneWrapper>
    <Box margin='0 0 12px'>
      <PaneLabel>positioning</PaneLabel>
    </Box>
    <PositionInput id={id} />
    <DimensionInput id={id} />
    <RotationInput id={id} />
  </PaneWrapper>
)

export default PositioningEditor
