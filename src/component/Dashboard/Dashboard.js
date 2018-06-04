import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: true,
      search: "",
      posts: [],
      userPosts: true
    };
    this.getUserPosts = this.getUserPosts.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  getUserPosts() {
    const { search } = this.state;
    if (this.state.search) {
      return axios
        .get(`/api/posts?search=${search}`)
        .then(response => {
          console.log(response);
          this.setState({ posts: response.data });
        })
        .catch(e => console.log(e));
    }
    return axios
      .get(`/api/posts`)
      .then(response => {
        this.setState({ posts: response.data });
      })
      .catch(e => console.log(e));
  }

  handleInput(e) {
    this.setState({ search: e.target.value });
  }

  render() {
    console.log(this.state);
    let posts = this.state.posts.map((e, i) => {
      return (
        <Link key={i} to={`/post/${e.id}`}>
          <div className="post">
            <h2>{e.title}</h2>
            <div>
              <h2>{e.username}</h2>
              <img src={e.profile_pic} alt="post" />
            </div>
          </div>
        </Link>
      );
    });

    return (
      <div className="dashboard-page">
        <div className="dash-header">
          <section className="search-bar">
            <input
              type="text"
              className="search"
              value={this.state.search}
              placeholder="Search by Title"
              onChange={e => {
                this.handleInput(e);
              }}
            />
            <button className="search-btn" onClick={() => this.getUserPosts()}>
              <i className="fas fa-search fa-3x" />
            </button>
            <button className="reset">Reset</button>
          </section>
          <p>
            My Posts<span>
              <input type="checkbox" value={this.state.checked} />
            </span>
          </p>
        </div>
        {posts}
      </div>
    );
  }
}

export default Dashboard;
