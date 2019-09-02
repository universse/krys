import styled from 'react-emotion'

export const Viewport = styled('div')`
  z-index: 1;
  cursor: ${({ pannable }) => (pannable ? 'grab' : 'auto')};
  grid-area: 2 / 2 / -1 / span 1;
`
