import React, { Component } from "react";

import "./App.css";
import Nav from "./component/Nav/Nav";

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
