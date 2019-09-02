import { Component } from 'react'
import chroma from 'chroma-js'

export default class ColorTextInput extends Component {
  state = {
    value: this.props.value
  }

  ref = input => (this.input = input)

  validate = value => {
    return /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value)
  }

  handleBlur = e => {
    const { action, index, property, value } = this.props

    this.validate(e.target.value)
      ? this.setState({ value: chroma(e.target.value).hex() }, () =>
        action(this.state.value, index, property)
      )
      : this.setState({ value })
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  handleKeyDown = e => {
    switch (e.key) {
      case 'Escape':
        this.setState({ value: this.props.value }, () => this.input.blur())
        break
      case 'Enter':
        this.input.blur()
        break
      default:
        break
    }
  }

  render () {
    return this.props.children({
      value: this.state.value,
      innerRef: this.ref,
      type: 'text',
      onBlur: this.handleBlur,
      onChange: this.handleChange,
      onKeyDown: this.handleKeyDown
    })
  }
}

ColorTextInput.defaultProps = {}
