import { Component } from "react";
import { Outlet } from "react-router-dom";

class Welcome extends Component {
  render() {
    return (
      <>
        <h1>Welcome to our sweet home!</h1>
        <Outlet/>
      </>
    )
  }
}

export default Welcome
