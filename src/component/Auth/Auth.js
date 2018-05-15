import React, { Component } from "react";

const authPage = {
  background: "linear-gradient(to right, #ff70a6, #e9ff70",
  height: "100vh"
};

const authContainer = {
  height: "50vh",
  display: "flex",
  flexDirection: "column",
  color: "#f2f2f2",
  width: "40vw"
};

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
      <div style={authPage}>
        <div style={authContainer}>
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
