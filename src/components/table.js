import React, { Component } from 'react'

// label
// norm
// produced
// in percentage

//TODO: delete row on click event
// TODO: sum total percentage
// TODO: add downtime column if it was

class Table extends Component {
  state = {}
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Продукция</th>
            <th scope="col">Норма</th>
            <th scope="col">Выполнено комплектов</th>
            <th scope="col">%</th>
          </tr>
        </thead>
        <tbody>
          {this.props.produced.map((data, i) => {
            const rate = Math.round(
              ((data.workTime / data.multiplier) *
                data.workers *
                data.syllabus) /
                100
            )
            const percentage = Math.round((data.manufactured / rate) * 100)
            return (
              <tr key={data.id} onClick={() => this.props.delete(data.id)}>
                <th scope="row">{i + 1}</th>
                <td>{data.label}</td>
                <td>{rate}</td>
                <td>{data.manufactured}</td>
                <td>{percentage}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default Table
