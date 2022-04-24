/*
import React, { Component } from 'react'

//Refs
class CustomTextInput extends Component {
  constructor(props) {
    super(props)
    this.textInput = React.createRef()
    this.focusTextInput = this.focusTextInput.bind(this)
  }

  focusTextInput() {
    this.textInput.current.focus()
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <br/>
        <input type="button" value="Focus the text input" onClick={this.focusTextInput} />
      </div>
    )
  }
}


class App extends Component {
  constructor(props) {
    super(props)
    this.textInput = React.createRef()
  }

  componentDidMount() {
    this.textInput.current.focusTextInput()
  }

  render() {
    const myStyle = {
      textAlign: 'center',
      width: '100%'
    }

    return (
      <div style={myStyle}>
        <h1>Use of Refs</h1>
        <CustomTextInput ref={this.textInput} />
      </div>
    )
  }
}

export default App
*/

/*
//Callback refs
import React, { Component } from 'react'

class App extends Component {
  
  constructor(props) {
    super(props)

    this.callRefInput = null

    this.setInputRef = element => {
      this.callRefInput = element
    }

    this.focusRefInput = () => {
      if (this.callRefInput) this.callRefInput.focus()
    }
  }

  componentDidMount() {
    this.focusRefInput()
  }

  render() {
    return (
      <div>
        <h2>Callback Refs Example</h2>
        <input type="text" ref={this.setInputRef} />
        <input type="button" value="Focus input text" onClick={this.focusRefInput} />
      </div>
    )
  }

}

export default App
*/

//Forward refs

import React, { Component } from 'react'
  
const TextInput = React.forwardRef((props, ref) => (  
  <input type="text" placeholder="Hello World" ref={ref} />  
))

const inputRef = React.createRef()

class App extends Component {  
  handleSubmit = e => {  
    e.preventDefault()
    console.log(inputRef.current.value)
  }

  render() {  
    return (  
      <div>   
        <form onSubmit={e => this.handleSubmit(e)}>            
          <TextInput ref={inputRef} />  
          <button>Submit</button>  
        </form>  
      </div>  
    )
  }
}

export default App
