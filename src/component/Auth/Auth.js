import React, { Component } from "react";
import "./Auth.css";
import helo from "../../images/helo_logo.png";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { registerUser, loginUser } from "../../ducks/reducer";

class Auth extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    // console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    console.log(this.state);

    return (
      <div className="authPage">
        <div className="authContainer">
          <a href="https://www.imdb.com/title/tt0129167/">
            <img src={helo} alt="helo-logo" />
          </a>
          <h1>Helo</h1>
          <div id="to-sign">
            <div className="signin">
              <p> Username:</p>
              <input
                name="username"
                type="text"
                value={this.state.username}
                onChange={e => this.handleInput(e)}
              />
            </div>
            <div className="signin">
              <p>Password:</p>
              <input
                name="password"
                // type="password"
                value={this.state.password}
                onChange={e => this.handleInput(e)}
              />
            </div>
          </div>
          <div id="sign-buttons">
            {!this.state.userName && !this.state.password ? (
              <button>Login</button>
            ) : (
              <Link to="/dashboard">
                <button
                  onClick={() => {
                    this.props.loginUser(
                      this.state.username,
                      this.state.password
                    );
                  }}
                >
                  Login
                </button>
              </Link>
            )}
            {!this.state.userName && !this.state.password ? (
              <button>Register</button>
            ) : (
              <Link to="/dashboard">
                <button
                  onClick={() => {
                    this.props.registerUser(
                      this.state.username,
                      this.state.password
                    );
                  }}
                >
                  Register
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ...state };
}
export default connect(mapStateToProps, { registerUser, loginUser })(Auth);
