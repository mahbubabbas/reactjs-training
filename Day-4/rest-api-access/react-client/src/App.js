import { Component } from "react";
import './App.css'

//This is our API entry point
//const API_URL = 'https://jsonplaceholder.typicode.com/posts'
const API_URL = 'http://localhost:8000/posts'

class App extends Component {
  constructor() {
    super()

    this.state = {
      posts: [],
      title: '',
      body: ''
    }

    this.onChangeTitle = this.onChangeTitle.bind(this)
    this.onChangeBody = this.onChangeBody.bind(this)
    this.onSubmmit = this.onSubmmit.bind(this)
  }

  //Display single record
  getOneRecord(id) {
    fetch(`${API_URL}/${id}`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ post: json })
      });
  }

  //Display all the records
  getAllRecords() {
    fetch(`${API_URL}`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ posts: json })
      });
  }

  insertRecord(data) {
    fetch(`${API_URL}`, {
      method: 'POST',
      body: JSON.stringify(
        data
      ),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        this.getAllRecords()
      })
  }

  componentDidMount() {
    this.getAllRecords()
  }

  onChangeTitle(e) {
    this.setState({ title: e.target.value })
  }

  onChangeBody(e) {
    this.setState({ body: e.target.value })
  }

  deleteRecord(id) {
    fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    }).then((resp) => {
      this.setState()
    })
  }

  onSubmmit(e) {
    const data = {
      title: this.state.title,
      body: this.state.body,
    }
    
    this.insertRecord(data)
    e.preventDefault()
  }

  render() {
    const { posts } = this.state

    return (
      <div>
        <form onSubmit={this.onSubmmit}>
          <input onChange={this.onChangeTitle} />
          <input onChange={this.onChangeBody} />
          <button type="submit">Submit</button>
        </form>

        <h1>All records</h1>
        
        <table className="myTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <DisplayTable posts={posts} deleteRecord={this.deleteRecord} />
          </tbody>
        </table>

      </div>
    )
  }
}

function DisplayTable(props) {
  return (
    props.posts.map((post) => {
      return <tr key={post.id}>
        <td>{post.id}</td>
        <td>{post.title}</td>
        <td>{post.body}</td>
        <td>
          <button onClick={() => props.deleteRecord(post.id)}>Delete</button>
        </td>
      </tr>
    })
  )
}


export default App
