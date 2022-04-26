import React from 'react'
import { TransitionGroup } from 'react-transition-group'

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { items: ['hello', 'world', 'click', 'me'] }
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd() {
    const newItems = this.state.items.concat([
      prompt('Enter some text')
    ])

    this.setState({ items: newItems });
  }

  handleRemove(i) {
    let newItems = this.state.items.slice()
    newItems.splice(i, 1)
    this.setState({ items: newItems })
  }

  render() {
    const items = this.state.items.map((item, i) => (
      <div key={i} onClick={() => this.handleRemove(i)}>
        {item}
      </div>
    ))

    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <TransitionGroup
          transitionName="example"
          transitionEnterTimeout={1500}
          transitionLeaveTimeout={300}>
          {items}
        </TransitionGroup>
      </div>
    )
  }
}

export default TodoList