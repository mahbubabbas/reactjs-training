import logo from './logo.svg';
import './App.css';

import { Component } from 'react'

const API_URL = 'http://localhost:8000/students'

class App extends Component {
  constructor() {
    super()

    this.state = {
      loading: false,
      data: [],

      id: '',
      title: '',
      author: ''
    }

    this.fetchAll = this.fetchAll.bind(this)

    this.fetchData = this.fetchData.bind(this)
    
    this.onChangeId = this.onChangeId.bind(this)
    this.onChangeTitle = this.onChangeTitle.bind(this)
    this.onChangeAuthor = this.onChangeAuthor.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChangeId(e) {
    this.setState({ id: e.target.value })
  }

  onChangeTitle(e) {
    this.setState({ title: e.target.value })
  }

  onChangeAuthor(e) {
    this.setState({ author: e.target.value })
  }

  onSubmit() {
    this.insertData({
      id: this.state.id,
      title: this.state.title,
      author: this.state.author
    })
  }

  insertData(data) {
    fetch(`${API_URL}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        this.fetchAll()
      })
  }

  fetchData(id) {
    fetch(`${API_URL}/${id}`)
      .then((response) => response.json())
      .then((json) => this.setState({ data: json }));
  }

  fetchAll() {
    fetch(`${API_URL}`)
    .then((response) => response.json())
    .then((json) => {
      this.setState({ loading: false, data: json })
    })

    /*this.setState({ loading: true }, () => {
    })*/
  }

  deleteData(id) {
    fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    }).then((resp) => {
      this.fetchAll()
    })
  }

  componentDidMount() {
    this.fetchAll()
  }


  render() {
    const { loading, data } = this.state

    return (
      <div>
        <input type='text' onChange={this.onChangeId} />
        <input type='text' onChange={this.onChangeTitle} />
        <input type='text' onChange={this.onChangeAuthor} />
        <button onClick={this.onSubmit} >Submit</button>

        <h1>Remote data</h1>
        {
          loading ? <p>loading...</p> : <table className='myTable'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Roll</th>
              </tr>
            </thead>
            <tbody>
            {
              data.map((d) =>
                <tr key={d.id}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.roll_no}</td>
                </tr>
              )
            }
          </tbody></table>
        }
      </div>
    )
  }
}



export default App;
