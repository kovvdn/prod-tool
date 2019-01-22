import { Component } from 'react'

class Toggle extends Component {
  state = {
    on: false,
  }

  toggle = cb => {
    this.setState({ on: !this.state.on })
  }

  render() {
    return this.props.children({
      on: this.state.on,
      toggle: this.toggle,
    })
  }
}

export default Toggle
