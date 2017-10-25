import React from 'react'
import styled from 'styled-components'
import List from './List'
import { intersectionWith, isEqual } from 'lodash'

const _ = {
  intersectionWith,
  isEqual,
}

const AppWrapper = styled.div`
  margin: 1rem 1rem 1rem 1rem;
`

const ResultArea = styled.div`
  margin: 0 auto;
  padding: 0.3rem 0.3rem 0.3rem 0.3rem;
  box-sizing : border-box;
  background-color: #BFD3C1;
  width: calc(100% - 2rem);
  font-size: 1.5rem;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`

const UlWrapper = styled.ul`
`

const LiWrapper = styled.li`
  margin: 0.3rem;
`

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
        <LiWrapper key={idx}>{val}</LiWrapper>
      )
    })

    return (
      <AppWrapper>
        {compareCols}
        <ResultArea>
          <UlWrapper>
            {result}
          </UlWrapper>
        </ResultArea>
      </AppWrapper>
    )
  }
}

export default App
