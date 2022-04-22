import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Welcome name='Mahboob' />
      </div>
    )
  }
}

function Welcome(props) {
  return <h2>Hi, {props.name}! How are you doing?</h2>
}


App.defaultProps = {
  title: 'Funny Title'
}


class App2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Abbas'
    }
  }

  render() {
    return (
      <div>
        <Welcome name={this.state.name} />
      </div>
    )
  }
}


export default App; 
//export default App2; //state with props
