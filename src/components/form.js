import React, { Component } from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

import products from '../products'

import Input from './input'

const inputs = [
  { label: 'Количество работников:', type: 'number', name: 'workers' },
  { label: 'Произведено комплектов:', type: 'number', name: 'manufactured' },
  {
    label: 'Простой / Переход на другую продукцию (в минутах):',
    type: 'number',
    name: 'downtime',
  },
]

class FormData extends Component {
  static propTypes = {
    addProduced: PropTypes.func,
  }

  state = {
    product: null,
    manufactured: 0,
    workers: 19,
    downtime: 0,
  }

  handleSelect = product => {
    this.setState({ product })
  }

  handleInput = e => {
    const { name, value, type } = e.target
    this.setState({
      [name]: type === 'number' && value ? parseFloat(value) : value,
    })
  }

  handleForm = e => {
    e.preventDefault()
    const { product, manufactured, workers, downtime } = this.state
    const { formatData } = this.props

    if (!product) return

    formatData({
      product,
      manufactured,
      workers,
      downtime,
    })
  }

  render() {
    const { product } = this.state

    return (
      <form onSubmit={this.handleForm}>
        <Input label="Продукция:">
          <Select
            options={products}
            value={product}
            onChange={this.handleSelect}
            placeholder="Выберите производимую продукцию"
          />
        </Input>
        {inputs.map(input => (
          <Input
            key={input.name}
            type={input.type}
            label={input.label}
            name={input.name}
            value={this.state[input.name]}
            handler={this.handleInput}
          />
        ))}
        <button className="btn btn-primary">Добавить</button>
      </form>
    )
  }
}

export default FormData
