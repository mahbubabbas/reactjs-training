import React, { Component } from "react";

class App extends Component{
  constructor(props) {
    super(props)
    this.handleUpdate = this.handleUpdate.bind(this)
    
    this.fname = React.createRef()
    this.lname = React.createRef()
  }

  handleUpdate(event) {
    console.log(this.fname)
    console.log(this.lname)

    alert('Your firstname is ' + this.fname.current.value + ' and last name is ' + this.lname.current.value)
    event.preventDefault()
  }

  render() {
    return(
      <form onSubmit={this.handleUpdate}>
        <label>First Name:
          <input type='text' ref={this.fname}/>
        </label>

        <label>Last Name:
          <input type='text' ref={this.lname}/>
        </label>

        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default App

