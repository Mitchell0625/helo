import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Nav.css";
import home from "../../images/home_logo.png";
import newPost from "../../images/new_logo.png";
import shutDown from "../../images/shut_down.png";

function Nav(props) {
  return (
    <div className="nav-container">
      <div className="top">
        <div>
          <img
            src={props.user.profile_pic}
            alt="user image"
            className="user-img"
          />
          <h2>{props.user.username}</h2>
        </div>
        <div>
          <Link to="/dashboard">
            <button>
              <img src={home} alt="home icon" />
            </button>
          </Link>
          <Link to="/post/:postid">
            <button>
              <img src={newPost} alt="post icon" />
            </button>
          </Link>
        </div>
      </div>
      <Link to="/">
        <button>
          <img src={shutDown} alt="logout icon" />
        </button>
      </Link>
    </div>
  );
}

function mapStateToProps(state) {
  const { user } = state;
  return {
    user
  };
}
export default connect(mapStateToProps)(Nav);
