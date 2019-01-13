import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ label, type, value, name, handler }) => (
  <div className="form-group row">
    <label className="col-sm-4 col-form-label">{label}</label>
    <div className="col-sm-8">
      <input
        type={type}
        className="form-control"
        value={value}
        name={name}
        onChange={handler}
      />
    </div>
  </div>
)

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handler: PropTypes.func.isRequired,
}

export default Input
