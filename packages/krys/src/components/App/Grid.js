import styled from 'react-emotion'
import { toolbarHeight, leftbarWidth, rightpaneWidth } from '../../temp-theme'

const Grid = styled('div')`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: ${leftbarWidth}px auto ${rightpaneWidth}px;
  grid-template-rows: ${toolbarHeight}px 16px auto;
`

export default Grid
