import React from 'react'
import { Formik } from 'formik'

import BreakpointInput from './BreakpointInput'
import { Box } from '../../common'
import { H2, Section } from '../styled'

const Breakpoints = ({ breakpoints, setBreakpoints }) => (
  <Section>
    <Box margin='0 0 0 0.5rem'>
      <H2>Breakpoints</H2>
    </Box>
    <Formik
      initialValues={{ breakpoints }}
      // validate={validate}
      onSubmit={(values, actions) => {
        setBreakpoints(values.breakpoints)
        actions.setSubmitting(false)
      }}
      component={BreakpointInput}
    />
  </Section>
)

export default Breakpoints
