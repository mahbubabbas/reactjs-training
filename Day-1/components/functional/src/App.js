import React, { Component } from "react"

function Foo1() {
  return (
    <h1>
      Functional Components - under Foo1
    </h1>
  )
}

function Foo2() {
  return (
    <h2>
      Foo2
    </h2>
  )
}

class Foo3 extends Component {
  render() {
    return(
      <h3>
        Functional Component in class
      </h3>
    )
  }
}

function App() {
  return (
    <div>
      <Foo1 />
      <Foo2 />
      <Foo3 />
    </div>
  )
}

export default App
