import React from 'react'
import { connect } from 'react-redux'

import { selectShades } from './reducer'

const Shades = ({ shades }) => (
  <div>
    {shades.map(shade => (
      <div>
        {shade.map(s => (
          <div
            style={{
              display: 'inline-block',
              backgroundColor: s,
              width: '2.5rem',
              height: '2.5rem'
            }}
          />
        ))}
      </div>
    ))}
  </div>
)

const mapStateToProps = state => ({
  shades: selectShades(state)
})

export default connect(mapStateToProps)(Shades)
