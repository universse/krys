import React, { PureComponent } from 'react'

import LeftPane from './LeftPane'
import { content, allTabs } from './propTypes'
export { tabs, content } from './tabContent'

export default class LeftPaneContainer extends PureComponent {
  static propTypes = {
    content,
    tabs: allTabs
  }

  state = {
    selected: null,
    content: null
  }

  onSelect = selected => {
    if (selected === this.state.selected) {
      this.setState({ selected: null, content: null })
    } else {
      this.setState({ selected, content: this.props.content[selected] })
    }
  }

  render () {
    return (
      <LeftPane
        tabs={this.props.tabs}
        selected={this.state.selected}
        Content={this.state.content}
        onSelect={this.onSelect}
      />
    )
  }
}
