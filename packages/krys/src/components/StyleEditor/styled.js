import styled from 'react-emotion'
import withProps from 'recompose/withProps'

import { Flex } from '../common'

export const ColorBox = styled('div')`
  width: 24px;
  height: 24px;
  border: 1px solid #ddd;
  border-right: none;
  background-color: ${({ hex }) => hex};
  border-bottom-left-radius: 2px;
  border-top-left-radius: 2px;
`

export const Input = styled('input')`
  height: 24px;
  flex: 0 0 ${({ flex }) => flex}%;
  padding-left: 4px;
  border: 1px solid #ddd;
  border-radius: 2px;
  font-size: 12px;
`

export const SmallInput = styled('input')`
  width: 100%;
  flex: 0 0 24px;
  padding-left: 4px;
  border: 1px solid #ddd;
  border-radius: 2px;
  font-size: 12px;
`

export const InputLabel = styled('label')`
  font-size: 11px;
  ${({ flex }) => flex && `flex: 0 0 ${flex}%`};
`

export const InputWrapper = withProps({
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  flex: '0 0 20%',
  height: 40
})(Flex)

export const PaneLabel = styled('span')`
  color: #777;
  font-size: 12px;
  font-weight: 700;
  text-transform: capitalize;
`

export const PaneWrapper = styled('div')`
  padding: 12px 20px 8px;
  border-bottom: 1px solid #ddd;
`

export const TextInput = styled('input')`
  height: 24px;
  flex: 0 0 60%;
  padding-left: 4px;
  border: 1px solid #ddd;
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
  font-size: 12px;
  text-transform: uppercase;
`
