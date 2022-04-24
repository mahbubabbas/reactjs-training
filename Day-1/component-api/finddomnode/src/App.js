import { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      color: 'red'
    }

    this.findDOMNodeHandler = this.findDOMNodeHandler.bind(this)
  }

  changeColor() {
    this.setState({ color: this.state.color === 'red' ? 'blue' : 'red' })
  }

  findDOMNodeHandler() {
    this.changeColor()

    let myDiv = document.getElementById('myDiv')
    ReactDOM.findDOMNode(myDiv).style.color = this.state.color
  }

  render() {
    const myStyle = {
      color: this.state.color
    }

    return (
      <div>
        <h1 id='myDiv' style={myStyle}>My Div</h1>
        <button onClick={this.findDOMNodeHandler}>Change Color</button>
      </div>
    )
  }
}

export default App
