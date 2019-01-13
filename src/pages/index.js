import React, { Component } from 'react'

import ProductivityForm from '../components/productivityForm'
import Table from '../components/table'

class Index extends Component {
  state = {
    produced: [],
  }

  handleProduced = data => {
    const produced = {
      id: Date.now(),
      label: data.product.label,
      multiplier: data.product.value,
      workers: data.workers,
      workTime: data.workTime - data.downTime,
      manufactured: data.manufactured,
      syllabus: data.syllabus,
    }
    this.setState({ produced: [...this.state.produced, produced] })
  }

  deleteProducedRow = id => {
    this.setState({
      produced: this.state.produced.filter(data => data.id !== id),
    })
  }

  render() {
    return (
      <>
        <ProductivityForm addProduced={this.handleProduced} />
        <Table produced={this.state.produced} delete={this.deleteProducedRow} />
      </>
    )
  }
}

export default Index
