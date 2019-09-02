import styled from 'react-emotion'

import LibraryContent from '../Library'
import { Page, Theme, Library, Data, Code, Assets, Layers } from '../../icons'

export const tabs = {
  top: [
    {
      id: 1,
      Icon: Page
    },
    {
      id: 2,
      Icon: Theme
    },
    {
      id: 3,
      Icon: Library
    },
    {
      id: 4,
      Icon: Data
    },
    {
      id: 5,
      Icon: Code
    }
  ],
  bottom: [
    {
      id: 6,
      Icon: Assets
    },
    {
      id: 7,
      Icon: Layers
    }
  ]
}

const Content = styled('div')`
  width: 300px;
`
const Content2 = styled('div')`
  width: 200px;
`
export const content = { 1: Content, 2: Content2, 3: LibraryContent }
