import { Component } from "react";

class App extends Component {
  constructor() {
    super()
    this.state = {
      msg: 'Welcome'
    }

    this.updateMessage = this.updateMessage.bind(this)

  }

  updateMessage() {
    this.setState({
      msg: 'New message'
    })
  }

  render() {
    return(
      <div>
        <h1>This is test for setState</h1>
        <h3>{this.state.msg}</h3>
        <button onClick={this.updateMessage}>Update Message</button>

      </div>
    )
  }
}


export default App
