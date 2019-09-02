import React from 'react'

import { Box } from '../common'
import { PaneLabel, PaneWrapper } from './styled'
import ShadowsInput from './ShadowsInput'

const ShadowsEditor = ({ id }) => (
  <PaneWrapper>
    <Box margin='0 0 12px'>
      <PaneLabel>shadows</PaneLabel>
    </Box>
    <ShadowsInput id={id} />
  </PaneWrapper>
)

export default ShadowsEditor
