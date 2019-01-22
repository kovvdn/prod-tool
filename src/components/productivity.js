import React, { Component } from 'react'
import Form from './form'
import Table from './table'

class Productivity extends Component {
  render() {
    const { output, productivity, deleteOutputItem, handleData } = this.props
    console.log(this.props)
    return (
      <>
        <Form formatData={handleData} />
        <br />
        {output.length > 0 && (
          <>
            <Table output={output} deleteRow={deleteOutputItem} />
            <br />
            <p className="lead text-right">Общая выработка: {productivity} %</p>
          </>
        )}
      </>
    )
  }
}

export default Productivity
