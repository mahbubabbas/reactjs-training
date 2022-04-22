import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

///
/// JSX
///

function App1() {
  return (
    <div>
      <p>
        <h1>This is a test using function</h1>
      </p>
    </div>
  );
}

//Nested element  
//Comments
//Attribues
// - as string literals
// - as expression
//styling
//control flow

class App extends Component {
  
  render() {
    
    const elem = <div>Hello world</div>

    let warning = 'warning'
    var mystyle = {
      fontSize: 80,
      color: 'red'
    }
    return (
      <div>
        <p data-myAttr="test">
          <h1 style={mystyle}  className={warning}>This is a test using class</h1>
          {/* this is a comment inside jsx */}
        </p>
      </div>
    )
  }
}


export default App;
