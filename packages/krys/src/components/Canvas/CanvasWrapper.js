import styled from 'react-emotion'

const CanvasWrapper = styled('div')`
  position: absolute;
  z-index: ${({ pannable }) => (pannable ? 1 : 0)};
  top: 40px;
  right: 240px;
  bottom: 0;
  left: 40px;
`

export default CanvasWrapper
