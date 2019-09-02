import { Component } from 'react'

export default class NumberInput extends Component {
  state = {
    value: this.props.value,
    draft: this.props.value
  }

  static getDerivedStateFromProps (props, state) {
    if (props.value !== state.value) {
      return {
        value: props.value,
        draft: props.value
      }
    }
    return null
  }

  ref = input => (this.input = input)

  getValue (value) {
    const { min, max } = this.props
    return Math.max(min, Math.min(max, value))
  }

  handleBlur = e => {
    const { action, index, property } = this.props
    this.setState({ draft: this.getValue(e.target.value) }, () =>
      action(this.state.draft, index, property)
    )
  }

  handleChange = e => {
    const { value } = e.target
    if (value === '-' || value === '') {
      this.setState({ draft: value })
    } else if (!isNaN(value)) {
      this.setState({ draft: this.getValue(value) })
    }
  }

  handleKeyDown = e => {
    const { draft } = this.state
    const { action, index, property } = this.props
    const value = parseInt(draft, 10)
    const change = e.shiftKey ? 10 : 1

    switch (e.key) {
      case 'ArrowUp':
        action(this.getValue(value + change), index, property)
        break
      case 'ArrowDown':
        action(this.getValue(value - change), index, property)
        break
      case 'Escape':
        this.setState({ draft: this.state.value }, () => this.input.blur())
        break
      case 'Enter':
        if (draft === '' || draft === '-') {
          this.setState({ draft: this.state.value }, () => this.input.blur())
        } else {
          this.input.blur()
        }
        break
      default:
        break
    }
  }

  render () {
    return this.props.children({
      value: this.state.draft,
      innerRef: this.ref,
      type: 'text',
      onBlur: this.handleBlur,
      onChange: this.handleChange,
      onKeyDown: this.handleKeyDown
    })
  }
}

NumberInput.defaultProps = {
  min: -Infinity,
  max: Infinity
}
