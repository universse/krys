import React from 'react'
import { FieldArray } from 'formik'
import chroma from 'chroma-js'
import nanoid from 'nanoid'

import { Box } from '../../common'
import { ColorBlock, InputField, RemoveButton } from '../styled'
import { Close } from '../../../icons'

// refactor

const BrandColorInput = ({ values, errors, submitForm }) => (
  <FieldArray
    name='brandColors'
    render={arrayHelpers => (
      // extract flex
      <form
        onBlur={submitForm}
        style={{ display: 'flex', flexFlow: 'row wrap' }}
      >
        {values.brandColors.map((brandColor, i) => {
          const name = `brandColors.${i}`

          let color
          try {
            color = chroma(brandColor.hex).hex()
          } catch (e) {
            color = '#000'
          }

          return (
            <Box key={name} margin='1rem 0.5rem' position='relative'>
              <div
                style={{
                  boxShadow: '0px 3px 6px 0 rgba(0,0,0,0.2)',
                  borderRadius: '4px'
                }}
              >
                <ColorBlock color={color} />
                <InputField name={`${name}.name`} />
                <InputField name={`${name}.hex`} error={errors[name]} />
                <RemoveButton
                  type='button'
                  onClick={() => {
                    arrayHelpers.remove(i)
                    submitForm()
                  }}
                >
                  <Close size={16} />
                </RemoveButton>
              </div>
            </Box>
          )
        })}
        <button
          type='button'
          onClick={() => {
            const newBrandColor = {
              name: nanoid(13),
              hex: chroma.random().hex()
            }
            arrayHelpers.push(newBrandColor)
          }}
        >
          Add brand color
        </button>
      </form>
    )}
  />
)

export default BrandColorInput
