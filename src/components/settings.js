import React, { Component } from 'react'

import Toggle from './Toggle'

class Settings extends Component {
  render() {
    const { set12HoursDay } = this.props
    return (
      <Toggle>
        {({ on, toggle }) => (
          <form>
            <div className="form-group">
              <div className="custom-control custom-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customSwitch1"
                  checked={on}
                  onChange={() => {
                    toggle()
                    set12HoursDay(!on)
                  }}
                />
                <label className="custom-control-label" htmlFor="customSwitch1">
                  12 часовой рабочий день.
                </label>
              </div>
            </div>
          </form>
        )}
      </Toggle>
    )
  }
}

export default Settings
