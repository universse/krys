import React, { PureComponent } from 'react'

import Views from './Views'
export { tabs, views } from './viewContent'

class ViewsContainer extends PureComponent {
  static propTypes = {}

  state = {
    selected: this.props.defaultTab,
    view: this.props.views[this.props.defaultTab]
  }

  onSelect = selected => {
    if (selected === this.state.selected) return
    this.setState({ selected, view: this.props.views[selected] })
  }

  render () {
    return (
      <Views
        tabs={this.props.tabs}
        selected={this.state.selected}
        View={this.state.view}
        onSelect={this.onSelect}
      />
    )
  }
}

export default ViewsContainer
