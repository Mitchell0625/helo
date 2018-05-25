import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: true,
      posts: []
    };
    this.getPosts = this.getPosts.bind(this);
  }

  componentDidMount() {
    this.getPosts();
  }
  getPosts() {
    axios.posts(`/api/posts/${this.props.user.id}`);
  }

  render() {
    let posts = this.state.posts.map((e, i) => {
      return (
        <div key={i}>
          <h2>{e.title}</h2>
          <h2>{e.author_id}</h2>
          <img src={e.img} />
        </div>
      );
    });
    return (
      <div>
        <input type="text" placeholder="Search by Title" />
        <button>Search</button>
        <button>Reset</button>
        <p>
          My Posts<span>
            <input type="checkbox" value={this.state.checked} />
          </span>
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(Dashboard);
