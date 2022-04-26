import './App.css';
import { Component } from 'react';

const names = ['Abbas', 'Mahboob', 'Saad', 'Fathima', 'Sameena']

const genRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

function ShowCountList(props) {
  return(
    <table>
      <tr>
        <th>Name</th>
        <th>Pick Count</th>
      </tr>
      {
        props.names.map((name, i) => 
          <tr>
            <td>{name}</td>
            <td>{props.counts[i]}</td>
          </tr>
        )
      }
    </table>
  )
}

class App extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      counts: [0, 0, 0, 0, 0]
    }

    this.pickName = this.pickName.bind(this)
  }

  pickName = () => {
    const i = genRandom(1, 5) - 1
    this.setState({name: names[i]})

    let newCounts = this.state.counts.map((count, index) => {
      if (index === i) {
        return count + 1
      } 
      return count
    })

    this.setState({counts: newCounts})
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.name}</h1>
        <button onClick={this.pickName}>Pick Name</button>
        <ShowCountList names={names} counts={this.state.counts}/>
      </div>
    )
  }
}

export default App
