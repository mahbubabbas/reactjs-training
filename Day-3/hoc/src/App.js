import React from 'react'

import "./App.css"
import EnhancedComponent from './HOC'

class App extends React.Component {
  render() {
    const { show, handleclick } = this.props

    return <div className='App'>
      <button onClick={handleclick}>{show}</button>
    </div>
  }
}

export default EnhancedComponent(App)
