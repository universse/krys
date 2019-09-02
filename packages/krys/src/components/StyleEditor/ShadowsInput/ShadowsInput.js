import React from 'react'

import ColorTextInput from '../shared/ColorTextInput'
import NumberInput from '../shared/NumberInput'
import { Box, Flex } from '../../common'
import {
  ColorBox,
  Input,
  InputLabel,
  InputWrapper,
  SmallInput,
  TextInput
} from '../styled'

const ShadowsInput = ({ shadows, editShadow }) =>
  shadows.map(({ x, y, blur, spread, hex, opacity, inset }, i) => (
    <Box key={i} margin='0 0 8px'>
      <Flex>
        <InputWrapper>
          <InputLabel htmlFor={`shadowX${i}`}>X</InputLabel>
          <NumberInput value={x} action={editShadow} property='x' index={i}>
            {props => (
              <SmallInput id={`shadowX${i}`} name={`shadowX${i}`} {...props} />
            )}
          </NumberInput>
        </InputWrapper>
        <InputWrapper>
          <InputLabel htmlFor={`shadowY${i}`}>Y</InputLabel>
          <NumberInput value={y} action={editShadow} property='y' index={i}>
            {props => (
              <SmallInput id={`shadowY${i}`} name={`shadowY${i}`} {...props} />
            )}
          </NumberInput>
        </InputWrapper>
        <InputWrapper>
          <InputLabel htmlFor={`shadowBlur${i}`}>Blur</InputLabel>
          <NumberInput
            value={blur}
            min={0}
            action={editShadow}
            property='blur'
            index={i}
          >
            {props => (
              <SmallInput
                id={`shadowBlur${i}`}
                name={`shadowBlur${i}`}
                {...props}
              />
            )}
          </NumberInput>
        </InputWrapper>
        <InputWrapper>
          <InputLabel htmlFor={`shadowSpread${i}`}>Spread</InputLabel>
          <NumberInput
            value={spread}
            action={editShadow}
            property='spread'
            index={i}
          >
            {props => (
              <SmallInput
                id={`shadowSpread${i}`}
                name={`shadowSpread${i}`}
                {...props}
              />
            )}
          </NumberInput>
        </InputWrapper>
      </Flex>
      <Flex>
        <Flex justifyContent='flex-start' flex='0 0 50%'>
          <ColorBox hex={hex} />
          <ColorTextInput
            value={hex}
            action={editShadow}
            property='hex'
            index={i}
          >
            {props => (
              <TextInput
                id={`shadowHex${i}`}
                name={`shadowHex${i}`}
                {...props}
              />
            )}
          </ColorTextInput>
        </Flex>
        <Flex justifyContent='flex-start' flex='0 0 30%'>
          <InputLabel flex={25} htmlFor={`shadowOpacity${i}`}>
            O
          </InputLabel>
          <NumberInput
            value={opacity}
            min={0}
            max={100}
            action={editShadow}
            property='opacity'
            index={i}
          >
            {props => (
              <Input
                id={`shadowOpacity${i}`}
                name={`shadowOpacity${i}`}
                flex={75}
                {...props}
              />
            )}
          </NumberInput>
        </Flex>
        <Flex justifyContent='flex-start' flex='0 0 20%'>
          <InputLabel flex={25} htmlFor={`shadowOpacity${i}`}>
            Inner
          </InputLabel>
          <input
            type='checkbox'
            id={`shadowOpacity${i}`}
            name={`shadowInner${i}`}
            onChange={() => editShadow(!inset, i, 'inset')}
            checked={inset}
          />
        </Flex>
      </Flex>
    </Box>
  ))

export default ShadowsInput
