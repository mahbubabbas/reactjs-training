import { Component } from "react";
import PropTypes from 'prop-types'

class App extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Welcome name='1' />
      </div>
    )
  }
}

function Welcome(props) {
  return <h2>Hi, {props.name}! How are you doing?</h2>
}

//Typecheking
Welcome.propTypes = {
  name: PropTypes.string
}


//Default props
App.defaultProps = {
  title: 'Funny Title'
}


//State with props
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
