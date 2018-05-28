import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../../ducks/reducer";
import "./Dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: true,
      inputVal: ""
    };
    this.getUserPosts = this.getUserPosts.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  getUserPosts() {
    this.props.getPosts(this.props.user.id, this.state.inputVal);
  }

  handleInput(e) {
    this.setState({ inputVal: e.target.value });
  }

  render() {
    let posts = this.props.posts.map((e, i) => {
      return (
        <div key={i}>
          <h2>{e.title}</h2>
          <h2>{e.author_id}</h2>
          <img src={e.img} alt="post" />
        </div>
      );
    });

    return (
      <div className="dashboard-page">
        <div className="dash-header">
          <div className="search-bar">
            <input
              type="text"
              className="search"
              value={this.state.inputVal}
              placeholder="Search by Title"
              onChange={e => {
                this.handleInput(e);
              }}
            />
            <button className="search-btn" onClick={() => this.getUserPosts()}>
              <i className="fas fa-search fa-3x" />
            </button>
            <button className="reset">Reset</button>
          </div>
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

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, { getPosts })(Dashboard);
