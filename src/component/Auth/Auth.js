import React, { Component } from "react";
import "./Auth.css";
import helo from "../../images/helo_logo.png";
import { registerUser } from "../../ducks/reducer";
import { connect } from "react-redux";

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
          <img src={helo} alt="helo-logo" />
          <h1>Helo</h1>
          <div className="signin">
            <p> Username:</p>
            <input
              name="userName"
              value={this.state.userName}
              onChange={e => this.handleInput(e)}
            />
          </div>
          <div className="signin">
            <p>Password:</p>
            <input
              name="passWord"
              value={this.state.passWord}
              onChange={e => this.handleInput(e)}
            />
          </div>
          <div id="sign-buttons">
            <button>Login</button>

            <button>Register</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {}
export default (Auth));
