import {Component } from 'react'

class App extends Component {
  constructor() {
    super()

    this.state = {
      name: ''
    }
    
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleSubmit(event) {
    alert('Your name is:' + this.state.name)
  }

  handleInputChange(event) {
    this.setState({name: event.target.value})
    console.log('input is changed :' + event.target.value)
  }

  render() {
    return(
      <div>
        <h1>Controller Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.handleInputChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default App;
