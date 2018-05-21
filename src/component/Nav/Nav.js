import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Nav(props) {
  return (
    <div className="nav-container">
      <div>
        <img src={props.user.profile_pic} alt="user image" />
        <h2>{props.user.username}</h2>
      </div>
      <Link to="/dashboard">
        <button>Home</button>
      </Link>
      <Link to="/post/:postid">
        <button>New Post</button>
      </Link>
      <Link to="/">
        <button>Logout</button>
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
