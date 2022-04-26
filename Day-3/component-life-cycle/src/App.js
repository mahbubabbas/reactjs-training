import React, { Component } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { msg: "What are you doing?" }
    this.changeState = this.changeState.bind(this)
  }

  render() {
    return (
      <div>
        <h1>Component Life Cycle Demo</h1>
        <h3>Hello {this.state.hello}</h3>
        <button onClick={this.changeState}>Click Here!</button>
      </div>
    )
  }

  //Unsafe - can be used with UNSAFE_ prefix
  componentWillMount() {
    console.log('Component Will MOUNT!')
  }

  componentDidMount() {
    console.log('Component Did MOUNT!')
  }

  changeState() {
    this.setState({ msg: "Change state" })
  }

  //Unsafe - can be used with UNSAFE_ prefix
  componentWillReceiveProps(newProps) {
    console.log('Component Will Recieve Props!')
  }

  shouldComponentUpdate(newProps, newState) {
    return true
  }

  //Unsafe - can be used with UNSAFE_ prefix
  componentWillUpdate(nextProps, nextState) {
    console.log('Component Will UPDATE!')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component Did UPDATE!')
  }

  componentWillUnmount() {
    console.log('Component Will UNMOUNT!')
  }

}

export default App