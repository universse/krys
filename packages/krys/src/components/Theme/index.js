import React from 'react'

import Breakpoints from './Breakpoints'
import Colors from './Colors'
import Spacing from './Spacing'
import Typography from './Typography'
import { Wrapper } from './styled'

const Theme = () => (
  <Wrapper>
    <Breakpoints />
    <Colors />
    <Spacing />
    <Typography />
  </Wrapper>
)

export default Theme
