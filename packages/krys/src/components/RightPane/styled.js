import styled from 'react-emotion'

import { border, white } from '../../temp-theme'

export const Wrapper = styled('div')`
  z-index: 2;
  border-left: 1px solid ${border};
  background-color: ${white};
  grid-column: -2/-1;
  grid-row: 2/-1;
`
