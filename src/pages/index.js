import React, { Component } from 'react'

import Productivity from '../components/productivity'
import Layout from '../components/layout'

// TODO: create settings component to manage work time and syllabus

class Index extends Component {
  state = {
    output: [],
    productivity: 0,
    worktime: 480,
  }
  clearOutput = () => {
    this.setState({ output: [] })
  }

  set12HoursDay = _12 => {
    console.log(_12)
    this.setState({ worktime: _12 ? 720 : 480 })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.output.length !== this.state.output.length) {
      this.setState({
        productivity: Math.round(
          this.state.output.reduce((acc, { productivity }) => {
            return acc + productivity
          }, 0)
        ),
      })
    }
  }

  handleData = ({
    product: { label, value },
    workers,
    manufactured,
    downtime,
  }) => {
    const { output, worktime } = this.state

    const requiredRate = Math.round(((worktime - downtime) / value) * workers)
    const percentage =
      Math.round((manufactured / requiredRate) * 100 * 100) / 100

    this.setState({
      output: [
        ...output,
        {
          id: Date.now(),
          label,
          requiredRate,
          workers,
          manufactured,
          downtime,
          productivity: percentage,
        },
      ],
    })
  }

  deleteOutputItem = id => {
    this.setState({
      output: this.state.output.filter(data => data.id !== id),
    })
  }

  render() {
    const { output, productivity } = this.state
    const { deleteOutputItem, handleData, clearOutput, set12HoursDay } = this
    return (
      <Layout clearOutput={clearOutput} set12HoursDay={set12HoursDay}>
        <Productivity
          output={output}
          deleteOutputItem={deleteOutputItem}
          handleData={handleData}
          productivity={productivity}
        />
      </Layout>
    )
  }
}

export default Index
