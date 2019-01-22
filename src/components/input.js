import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ label, type, value, name, handler, children }) => (
  <div className="form-group row">
    <label className="col-sm-4 col-form-label">{label}</label>
    {children ? (
      React.Children.map(children, child =>
        React.cloneElement(child, {
          className: 'col-sm-8',
        })
      )
    ) : (
      <div className="col-sm-8">
        <input
          type={type}
          className="form-control"
          value={value}
          name={name}
          onChange={handler}
        />
      </div>
    )}
  </div>
)

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handler: PropTypes.func,
}

export default Input
