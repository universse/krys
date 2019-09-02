import styled from 'react-emotion'
import withProps from 'recompose/withProps'

import { containerProps } from '../propTypes'

const Container = styled('div')`
  position: relative;
  transform-origin: 0 0 0;
`

export default withProps(({ translatedX, translatedY, scale }) => ({
  style: {
    transform: `translate3d(${translatedX}px, ${translatedY}px, 0) scale(${scale})`
  }
}))(Container)

Container.propTypes = {
  ...containerProps
}
