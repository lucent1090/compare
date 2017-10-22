import React from 'react'

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
    return(
      <form>
        <textarea
          rows={10}
          cols={50}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default List
