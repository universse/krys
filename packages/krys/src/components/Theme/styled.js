import styled from 'react-emotion'
import { Field } from 'formik'

import { white, gray400 } from '../../temp-theme'

export const ColorBlock = styled('div')`
  width: 6rem;
  height: 6rem;
  background-color: ${({ color }) => color};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`

export const ColorField = styled('div')`
  position: relative;
  margin: 1rem 0.5rem;
`

export const H2 = styled('h3')`
  font-size: 1rem;
  font-weight: 700;
`

export const InputField = styled(Field)`
  width: 6rem;
  height: 1.5rem;
  padding: 0 0.25rem;
  border: none;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  font-size: 14px;
  ${({ error }) =>
    error &&
    `
      border: 1px solid red;
      border-top: none;
    `};
`

export const RemoveButton = styled('button')`
  position: absolute;
  right: 4px;
  bottom: 4px;
  width: 1rem;
  height: 1rem;
  color: ${gray400};

  &:focus {
  }
`

export const Section = styled('section')`
  width: 49rem;
`

export const Wrapper = styled('div')`
  display: flex;
  overflow: scroll;
  flex-flow: column nowrap;
  align-items: center;
  padding: 2rem 0;
  background-color: ${white};
  grid-area: 2/1/-1/-1;
`
