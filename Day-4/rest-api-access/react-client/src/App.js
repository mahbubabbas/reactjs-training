import { Component } from "react";
import './App.css'

//This is our API entry point
const API_URL = 'https://jsonplaceholder.typicode.com/posts'

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
      .then((json) => console.log(json))
  }

  componentDidMount() {
    this.getAllRecords()
  }

  onChangeTitle(e) {
    this.setState({title: e.target.value})
  }

  onChangeBody(e) {
    this.setState({body: e.target.value})
  }

  onSubmmit() {
    const data = {
      title: this.state.title,
      body: this.state.body,
      userId: 1
    }

    console.log(data)

    this.insertRecord(data)
  }
  
  render() {
    const { posts } = this.state

    return (
      <div>
        
        <input onChange={this.onChangeTitle}/>
        <input onChange={this.onChangeBody}/>
        <button onClick={this.onSubmmit}>Submit</button>

        <h1>All records</h1>              
        <table className="myTable">
          <tbody>
            <DisplayTable posts={posts}/>
          </tbody>
        </table>
      </div>
    )
  }
}

function DisplayTable(props) {
  return(
    props.posts.map((post) => {
      return <tr key={post.id}>
        <td>{post.id}</td>
        <td>{post.title}</td>
        <td>{post.body}</td>
        <td>{post.userId}</td>
      </tr>
    })
  )
}


export default App
