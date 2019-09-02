import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'

import LibraryComponent from './LibraryComponent'

const Content2 = styled('div')`
  width: 200px;
`

const Library = ({ visibleComponentNames }) => (
  <Content2>
    {/* flex */}
    <ul
      style={{
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center'
      }}
    >
      {visibleComponentNames &&
        visibleComponentNames.map(componentName => (
          <li key={componentName}>
            <LibraryComponent componentName={componentName} />
          </li>
        ))}
    </ul>
  </Content2>
)

Library.propTypes = {
  visibleComponentNames: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Library
