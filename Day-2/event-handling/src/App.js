import { Component } from 'react'

class App extends Component {
  constructor() {
    super()
   
    this.state = {
      name: ''
    }

    this.inputChange = this.inputChange.bind(this)
  }

  inputChange(event) {
    this.setState({name: event.target.value})
  }

  render() {
    return (
      <div>
        <h1>Event Handling</h1>
        <h2>Your name: 
          {this.state.name}
        </h2>
        <label>
          Name  <input type="text" onChange={this.inputChange} value={this.state.value} />
        </label>
      </div>
    )
  }
}

export default App
