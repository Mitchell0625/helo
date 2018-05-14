import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./component/Nav/Nav";
import Auth from "./component/Auth/Auth";
import Dashboard from "./component/Dashboard/Dashboard";
import Form from "./component/Form/Form";
import Post from "./component/Post/Post";
import { withRouter } from "react-router-dom";

import routes from "./routes";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        {this.props.location.pathname === "/" ? "" : <Nav />}

        {routes}
      </div>
    );
  }
}

export default withRouter(App);
