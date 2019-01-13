import React, { Component } from 'react'
import Select from 'react-select'

import PropTypes from 'prop-types'

import Input from './input'

const products = [
  { value: 15.2001, label: 'EKTORP EU' },
  { value: 15.2002, label: 'EKTORP GB' },
  { value: 25.9, label: 'KIVIK NA' },
  { value: 27.3, label: 'KIVIK EU' },
]

class ProductivityForm extends Component {
  static propTypes = {
    addProduced: PropTypes.func,
  }

  state = {
    product: null,
    manufactured: 0,
    workers: 19,
    downTime: 0,
    workTime: 480,
    syllabus: 100,
    isMore: false,
  }

  handleSelect = product => {
    this.setState({ product })
  }

  handleInput = e => {
    const { name, value, type, checked } = e.target
    if (type === 'number' && value) {
      this.setState({
        [name]: parseFloat(value),
      })
    } else if (type === 'checkbox') {
      this.setState({ [name]: checked })
    } else {
      this.setState({ [name]: value })
    }
  }

  handleForm = e => {
    e.preventDefault()
    const {
      product,
      manufactured,
      workers,
      downTime,
      workTime,
      syllabus,
    } = this.state
    const { addProduced } = this.props

    if (!product) return

    addProduced({
      product,
      manufactured,
      workers,
      downTime,
      workTime,
      syllabus,
    })
  }

  render() {
    const { product, isMore } = this.state

    return (
      <form onSubmit={this.handleForm}>
        <div className="form-group row">
          <label className="col-sm-4 col-form-label">Продукция:</label>
          <Select
            className="col-sm-8"
            options={products}
            value={product}
            onChange={this.handleSelect}
            placeholder="Выберите производимую продукцию"
          />
        </div>
        <Input
          label="Количество работников:"
          type="number"
          value={this.state.workers}
          name="workers"
          handler={this.handleInput}
        />
        <Input
          label="Произведено комплектов:"
          type="number"
          value={this.state.manufactured}
          name="manufactured"
          handler={this.handleInput}
        />

        <button
          type="button"
          onClick={() => this.setState({ isMore: !isMore })}
          className="btn text-info"
        >
          {isMore ? 'скрыть...' : 'ещё...'}
        </button>
        <hr />
        {isMore && (
          <>
            <Input
              label="Простой / Переход на другую продукцию (в минутах):"
              type="number"
              value={this.state.downTime}
              name="downTime"
              handler={this.handleInput}
            />
            <Input
              label="Учебный план (в процентах):"
              type="number"
              value={this.state.syllabus}
              name="syllabus"
              handler={this.handleInput}
            />
          </>
        )}

        <button className="btn btn-primary">Добавить</button>
      </form>
    )
  }
}

export default ProductivityForm
