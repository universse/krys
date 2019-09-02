import React, { Component } from 'react'
import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

const H1 = styled.h1`
  grid-column: 1/2;
`

const H2 = styled.h2`
  grid-column: 2/3;
`

const H3 = styled.h3`
  grid-column: 3/4;
`

const Resizer = styled.div`
  width: ${({ width }) => width / 16}rem;
  height: 1rem;
`

const SizeSelector = props => (
  <div>
    <Resizer width={480} />
    <Resizer width={600} />
    <Resizer width={840} />
    <Resizer width={960} />
    <Resizer width={1280} />
    <Resizer width={1440} />
  </div>
)

class App extends Component {
  render () {
    return (
      <Grid>
        <H1>Test</H1>
        <H2>h2</H2>
        <H3>h4</H3>
      </Grid>
    )
  }
}

export default App
