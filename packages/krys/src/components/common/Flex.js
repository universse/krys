import styled from 'react-emotion'

import { Box } from './Box'

export const Flex = styled(Box)`
  display: flex;
  ${({ flexDirection, flexWrap }) => `flex-flow: ${flexDirection} ${flexWrap}`};
  ${({ alignItems }) => `align-items: ${alignItems}`};
  ${({ justifyContent }) => `justify-content: ${justifyContent}`};
`

Flex.defaultProps = {
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  flexWrap: 'nowrap'
}
