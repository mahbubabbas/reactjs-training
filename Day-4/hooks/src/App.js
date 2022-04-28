import {Component, useEffect, useState} from 'react'
/*
class App extends Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }
  }

  incrementCount() {
    const oldCount  = this.state.count
    this.setState({count : oldCount + 1})
  }

}
*/

function App() {
  const [count, setCount] = useState(0)
  
  /*
  useEffect(() => {
    document.title = `Count value ${count}`
  })
  */

  useDocumentTitle(count)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

const useDocumentTitle = count => {
  useEffect(() => {
    document.title = `Count value ${count}`
  })
}

export default App;
