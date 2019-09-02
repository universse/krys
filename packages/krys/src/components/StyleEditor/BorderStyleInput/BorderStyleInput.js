import React from 'react'

import { Box, Flex } from '../../common'

const values = [
  'solid',
  'dotted',
  'dashed',
  'double',
  'groove',
  'ridge',
  'inset',
  'outset'
]

const BorderStyleInput = ({ borderStyle, editBorderStyle }) =>
  borderStyle ? (
    <Box margin='0 0 16px'>
      <Flex>
        <Flex flex='0 0 45%'>
          <select value={borderStyle} onChange={editBorderStyle}>
            {values.map(value => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </Flex>
      </Flex>
    </Box>
  ) : null

export default BorderStyleInput
