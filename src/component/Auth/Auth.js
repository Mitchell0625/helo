import React, { Component } from "react";
import "./Auth.css";

class Auth extends Component {
  constructor() {
    super();

    this.state = {
      userName: "",
      passWord: ""
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="authPage">
        <div className="authContainer">
          <img />
          <h1>Helo</h1>
          <input
            name="userName"
            value={this.state.userName}
            onChange={e => this.handleInput(e)}
          />
          <input
            name="passWord"
            value={this.state.passWord}
            onChange={e => this.handleInput(e)}
          />
          <button>Login</button>
          <button>Register</button>
        </div>
      </div>
    );
  }
}
export default Auth;
