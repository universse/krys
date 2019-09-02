import React, { Fragment } from 'react'

import NumberInput from '../shared/NumberInput'
import { Box, Flex } from '../../common'
import { Input, InputLabel } from '../styled'

const DimensionInput = ({ w, h, setW, setH }) => (
  <Fragment>
    <Box margin='0 0 16px'>
      <Flex>
        <Flex flex='0 0 45%'>
          <InputLabel htmlFor='W' flex={30}>
            W
          </InputLabel>
          <NumberInput value={w} action={setW}>
            {props => <Input id='W' name='W' flex={70} {...props} />}
          </NumberInput>
        </Flex>
        <Flex flex='0 0 45%'>
          <InputLabel flex={30}>A</InputLabel>
          {/* <NumberInput value action>
            {props => <Input id='A' name='A' flex={70} {...props} />}
          </NumberInput> */}
        </Flex>
      </Flex>
    </Box>
    <Box margin='0 0 16px'>
      <Flex>
        <Flex flex='0 0 45%'>
          <InputLabel htmlFor='H' flex={30}>
            H
          </InputLabel>
          <NumberInput value={h} action={setH}>
            {props => <Input id='H' name='H' flex={70} {...props} />}
          </NumberInput>
        </Flex>
      </Flex>
    </Box>
  </Fragment>
)

export default DimensionInput
