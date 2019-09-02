import React from 'react'
import { Field, FieldArray } from 'formik'
import { connect } from 'react-redux'

// import { addBrandColor, updateBrandColor, removeBrandColor } from './reducer'
import { Close } from '../../../icons'

// refactor

const BreakpointInput = ({ values, errors, submitForm }) => (
  <FieldArray
    name='breakpoints'
    render={arrayHelpers => (
      <form
        onBlur={submitForm}
        style={{ display: 'flex', flexFlow: 'row wrap' }}
      >
        {values.breakpoints.map((breakpoint, i) => (
          <div key={i}>
            <Field name={`breakpoints.${i}.name`} />
            <Field name={`breakpoints.${i}.breakpoint`} />
          </div>
        ))}
        <button
          type='button'
          onClick={() => {
            arrayHelpers.push({ name: '', breakpoint: '' })
          }}
        >
          Add breakpoint
        </button>
      </form>
    )}
  />
)

export default connect(
  null,
  {}
)(BreakpointInput)
