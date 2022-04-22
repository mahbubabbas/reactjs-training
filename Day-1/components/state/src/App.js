import { Component } from "react"


class MyApp extends Component {
  constructor() {
    super()
    this.state = { counter: 0 }
    this.incrementCounter = this.incrementCounter.bind(this)
    this.decrementCounter = this.decrementCounter.bind(this)
  }

  incrementCounter() {
    let oldCounter = this.state.counter
    this.setState({ counter: oldCounter + 1 })
  }

  decrementCounter() {
    let oldCounter = this.state.counter
    this.setState({ counter: oldCounter - 1 })
  }

  render() {
    const myStyle = {
      textAlign: 'center',
      width: '100%'
    }

    return (
      <div style={myStyle}>
        <h1>{this.state.counter}</h1>
        <button onClick={this.incrementCounter}>Increment</button>
        <button onClick={this.decrementCounter}>Decrement</button>
      </div>
    )
  }
}


export default MyApp
