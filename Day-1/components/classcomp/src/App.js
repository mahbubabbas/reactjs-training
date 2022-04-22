import React, { Component } from "react"

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [
        { 'name': 'Mahboob' },
        { 'name': 'Mahboob Shaikh' },
        { 'name': 'Mahboob Abbas' },
      ]
    }
  }

  render() {
    return (
      <div>
        <StudentHeader />
        {this.state.data.map((item) => <StudentList data={item} />)}
      </div>
    )
  }
}

class StudentHeader extends Component {
  render() {
    return (
      <h1>Student details</h1>
    )
  }
}

class StudentList extends Component {
  render() {
    return (
      <ul>
        <li>{this.props.data.name}</li>
      </ul>
    )
  }
}


export default App
