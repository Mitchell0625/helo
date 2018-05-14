import React, { Component } from "react";

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
      <div>
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
    );
  }
}
export default Auth;
