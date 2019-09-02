import styled from 'react-emotion'

export const Box = styled('div')`
  ${({ position }) => position && `position: ${position}`};
  ${({ width }) => width && `width: ${width}px`};
  ${({ height }) => height && `height: ${height}px`};
  ${({ flex }) => flex && `flex: ${flex}`};
  ${({ padding }) => padding && `padding: ${padding}`};
  ${({ margin }) => margin && `margin: ${margin}`};
`
