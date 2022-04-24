import { Component } from "react";

class App extends Component {
  constructor() {
    super()

    this.sampleForceUpdate = this.sampleForceUpdate.bind(this)    
  }

  sampleForceUpdate() {
    this.forceUpdate()
  }

  genOTP(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  render() {
    return(
      <div>
        <h3>OTP: {this.genOTP(10000, 99999)}</h3>
        <button onClick={this.sampleForceUpdate}>Force Update</button>
      </div>
    )
  }
}


export default App
