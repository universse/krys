import styled from 'react-emotion'

import { gray100, gray300 } from '../../temp-theme'

export default styled('button')`
  position: absolute;
  z-index: 2;
  left: calc(${({ w }) => `50% - ${w / 2}rem`});
  width: ${({ w }) => `${w}rem`};
  height: 1rem;
  border: 1px solid ${gray300};
  border-top: none;
  background-color: ${gray100};
`
