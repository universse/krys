import React from 'react'

import NumberInput from '../shared/NumberInput'
import { Box, Flex } from '../../common'
import { Input, InputLabel } from '../styled'

const PositionInput = ({ x, y, setX, setY }) => (
  <Box margin='0 0 16px'>
    <Flex>
      <Flex flex='0 0 45%'>
        <InputLabel htmlFor='X' flex={30}>
          X
        </InputLabel>
        <NumberInput value={x} action={setX}>
          {props => <Input id='X' name='X' flex={70} {...props} />}
        </NumberInput>
      </Flex>
      <Flex flex='0 0 45%'>
        <InputLabel htmlFor='Y' flex={30}>
          Y
        </InputLabel>
        <NumberInput value={y} action={setY}>
          {props => <Input id='Y' name='Y' flex={70} {...props} />}
        </NumberInput>
      </Flex>
    </Flex>
  </Box>
)

export default PositionInput
