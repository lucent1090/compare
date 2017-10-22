import React from 'react'
import List from './List'
import { intersectionWith, isEqual } from 'lodash'

const _ = {
  intersectionWith,
  isEqual,
}

class App extends React.Component {
  constructor(props) {
    super(props)

    this.updateData = this.updateData.bind(this)

    this.state = {
      nCol: 2,
      compareObjects: [],
      interObjects: [],
      compareCols: Array.from(new Array(2), (val, idx) => {
        return (
          <List
            key={idx}
            name={idx}
            updateData={this.updateData}
          />
        )
      })
    }
  }

  updateData(name, val) {
    const { compareObjects, interObjects } = this.state
    compareObjects[name] = val

    if (compareObjects.length > 1) {
      const inter = _.intersectionWith(...compareObjects, _.isEqual)
      if (!_.isEqual(inter, interObjects)) {
        this.setState({ interObjects: inter })
      }
    }
  }

  render() {
    const { compareCols, interObjects } = this.state
    const result = interObjects.map((val, idx) => {
      return (
        <li key={idx}>{val}</li>
      )
    })

    return (
      <div>
        {compareCols}
        <ul>
          {result}
        </ul>
      </div>
    )
  }
}

export default App
