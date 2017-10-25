import React from 'react'
import styled from 'styled-components'

const FormWrapper = styled.form`
  display: inline-block;
  width: calc(50% - 2rem);
  height: 10rem;
  margin: 1rem 1rem 1rem 1rem;

  @media screen and (max-width: 700px) {
    width: 100%;
    margin: 1rem 0rem 1rem 0rem;
  }
`

const TextareaWrapper = styled.textarea`
  width: 100%;
  height: 100%;
  font-size: 1rem;
  box-sizing : border-box;
  border: none;
  outline: none;
  color: #694F5D;
  padding-top: 1rem;
  padding-left: 1rem;
`

class List extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    event.preventDefault()

    const items = event.target.value.split(/\s/).filter(Boolean)
    this.props.updateData(this.props.name, items)
  }

  render() {
    const bg = (this.props.name%2) ? '#EFC7C2' : '#FFE5D4'
    return(
      <FormWrapper>
        <TextareaWrapper
          style={{ backgroundColor: bg }}
          onChange={this.handleChange}
        />
      </FormWrapper>
    )
  }
}

export default List
