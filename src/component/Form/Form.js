import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      imgUrl: "",
      content: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.newPost = this.newPost.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  newPost() {
    const { title, imgUrl, content } = this.state;
    axios
      .post(`/api/post/${this.props.user.id}`, { title, imgUrl, content })
      .then(response => {});
  }

  render() {
    return (
      <div className="form-page">
        <form onSubmit={() => this.newPost()}>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            name="imgURL"
            value={this.state.imgURL}
            onChange={this.handleChange}
          />
          <input
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <input type="submit" value="Post" />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(Form);
