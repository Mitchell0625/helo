import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
    axios.post(`/api/post`, { title, imgUrl, content }).then(response => {
      <Link to="/" />;
    });
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

export default Form;
