import { Component } from 'react'

//Conditional rendering
function UserLogin(props) {
  return <h1>Welcome back!</h1>
}

function GuestLogin(props) {
  return <h1>Please sign up.</h1>
}

function SignUp(props) {
  if (props.isLoggedIn) {
    return <UserLogin />
  }

  return <GuestLogin />
}

//&& operator
function Example(props) {
  return (
    <div>
      {
        props.data > 10 && alert('this is a test')
      }
    </div>
  )
}

class App extends Component {

  render() {
    return (
      <div>
        <SignUp isLoggedIn={false} />
        <Example data='1'/>
      </div>
    )
  }

}


export default App

