import React from 'react'
import { Formik } from 'formik'
import chroma from 'chroma-js'

import BrandColorInput from './BrandColorInput'
import Shades from './Shades'
import { Box } from '../../common'
import { H2, Section } from '../styled'

const validate = values => {
  let errors = {}
  values.brandColors.forEach((brandColor, i) => {
    try {
      chroma(brandColor.hex)
    } catch (e) {
      errors[`brandColors.${i}`] = 1
    }
  })
  return errors
}

const Colors = ({ brandColors, setBrandColors }) => (
  <Section>
    <Box margin='0 0 0 0.5rem'>
      <H2>Colors</H2>
    </Box>
    <Formik
      initialValues={{ brandColors }}
      validate={validate}
      onSubmit={(values, actions) => {
        setBrandColors(values.brandColors)
        actions.setSubmitting(false)
      }}
      component={BrandColorInput}
    />
    {/* <Shades /> */}
  </Section>
)

export default Colors
