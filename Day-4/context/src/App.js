import React, {Component} from 'react'

/*
function Toolbar (props) {
  return(
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  )
}

class ThemedButton extends React.Component {
  render() {
    return <Button theme={this.props.theme} />;
  }
}

function Button(props) {
  const myStyle = {
    color: props.theme === 'dark'? 'white': 'black',
    backgroundColor: props.theme === 'dark'? 'black': 'white',
  }

  return(
    <div>
      <button style={myStyle}>My Themed Button</button>
    </div>
  )
}

class App extends Component {
  render() {
    return(
      <Toolbar theme='light'/>
    )
  }
}
*/

const ThemeContext = React.createContext('light');  

function Toolbar (props) {
  return(
    <div>
      <ThemedButton />
    </div>
  )
}

class ThemedButton extends Component {
  static contextType = ThemeContext

  render() {
    return(
      <Button theme={this.context}/>
    )
  }
}

function Button(props) {
  const myStyle = {
    color: props.theme === 'dark'? 'white': 'black',
    backgroundColor: props.theme === 'dark'? 'black': 'white',
  }

  return(
    <div>
      <button style={myStyle}>My Themed Button</button>
    </div>
  )
}

class App extends Component {
  render() {
    return(
      <ThemeContext.Provider value="light">  
        <Toolbar />
      </ThemeContext.Provider>
    )
  }
}

export default App