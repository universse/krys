import styled from 'react-emotion'
import { border, white } from '../../temp-theme'

export const Button = styled('button')`
  width: 40px;
  height: 40px;

  &:focus {
  }
`

export const List = styled('ul')`
  display: flex;
  flex-direction: column;
`

export const Pane = styled('div')`
  flex: none;
  background-color: ${white};
`

export const Sidebar = styled('div')`
  display: flex;
  width: 100%;
  height: 100%;
  flex: none;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-right: 1px solid ${border};
  background-color: ${white};
`

export const Wrapper = styled('div')`
  z-index: 3;
  display: flex;
  grid-row: 2/-1;
`
