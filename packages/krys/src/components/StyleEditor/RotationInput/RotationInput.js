import React from 'react'

import NumberInput from '../shared/NumberInput'
import { Box, Flex } from '../../common'
import { Input, InputLabel } from '../styled'

const RotationInput = ({ r, setR }) => (
  <Box margin='0 0 8px'>
    <Flex>
      <Flex flex='0 0 45%'>
        <InputLabel htmlFor='R' flex={30}>
          R
        </InputLabel>
        <NumberInput value={r} action={setR}>
          {props => <Input id='R' name='R' flex={70} {...props} />}
        </NumberInput>
      </Flex>
    </Flex>
  </Box>
)

export default RotationInput
