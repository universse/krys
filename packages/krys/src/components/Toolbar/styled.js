import styled from 'react-emotion'

import { border, color, white, black300 } from '../../temp-theme'

export const Button = styled('button')`
  height: 100%;
  border-bottom: 2px solid
    ${({ selected }) => (selected ? color : 'transparent')};

  &:focus {
  }
`

export const ButtonText = styled('span')`
  color: ${({ selected }) => (selected ? color : black300)};
  font-size: 14px;
  font-weight: 600;
`

export const List = styled('ul')`
  display: flex;
`

export const ListItem = styled('li')`
  margin: 0 0.75rem;
`

export const Wrapper = styled('div')`
  z-index: 2;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${border};
  background-color: ${white};
  grid-column: 1/-1;
  grid-row: 1/2;
`
