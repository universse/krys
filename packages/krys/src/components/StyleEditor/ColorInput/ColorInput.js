import React from 'react'

import ColorTextInput from '../shared/ColorTextInput'
import NumberInput from '../shared/NumberInput'
import { Box, Flex } from '../../common'
import { ColorBox, Input, InputLabel, TextInput } from '../styled'

const ColorInput = ({ hex, opacity, editColor, editColorOpacity }) => (
  <Box margin='0 0 8px'>
    <Flex>
      <Flex justifyContent='flex-start' flex='0 0 60%'>
        <ColorBox hex={hex} />
        <ColorTextInput value={hex} action={editColor}>
          {props => (
            <TextInput id='backgroundHex' name='backgroundHex' {...props} />
          )}
        </ColorTextInput>
      </Flex>
      <Flex flex='0 0 40%'>
        <InputLabel htmlFor='backgroundOpacity' flex={25}>
          O
        </InputLabel>
        <NumberInput
          value={opacity}
          min={0}
          max={100}
          action={editColorOpacity}
        >
          {props => (
            <Input
              id='backgroundOpacity'
              name='backgroundOpacity'
              flex={75}
              {...props}
            />
          )}
        </NumberInput>
      </Flex>
    </Flex>
  </Box>
)

export default ColorInput
