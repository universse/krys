import React, { Fragment } from 'react'

import { Box } from '../common'
import ColorEditor from './ColorEditor'
import BorderEditor from './BorderEditor'
import PositioningEditor from './PositioningEditor'
import ShadowsEditor from './ShadowsEditor'
import { rightpaneWidth } from '../../temp-theme'

const StyleEditor = ({ targetId }) => {
  return (
    <form key={targetId} style={{ display: 'flex', flexFlow: 'row wrap' }}>
      <Box width={rightpaneWidth}>
        {targetId !== 'root' && <PositioningEditor id={targetId} />}
        <ColorEditor
          id={targetId}
          label='background'
          property='backgroundColor'
        />
        {targetId !== 'root' && (
          <Fragment>
            <ColorEditor id={targetId} label='color' property='color' />
            <BorderEditor id={targetId} />
            <ShadowsEditor id={targetId} />
          </Fragment>
        )}
      </Box>
    </form>
  )
}

export default StyleEditor
