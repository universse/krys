import React from 'react'

import NumberInput from '../shared/NumberInput'
import { Box, Flex } from '../../common'
import { Input, InputLabel } from '../styled'

const BorderWeightInput = ({ borderWeight, editBorderWeight }) =>
  borderWeight ? (
    <Box margin='0 0 16px'>
      <Flex>
        <Flex flex='0 0 45%'>
          <InputLabel htmlFor='borderWeight' flex={30}>
            W
          </InputLabel>
          <NumberInput value={borderWeight} min={0} action={editBorderWeight}>
            {props => (
              <Input id='borderWeight' name='borderWeight' {...props} />
            )}
          </NumberInput>
        </Flex>
      </Flex>
    </Box>
  ) : null

export default BorderWeightInput
