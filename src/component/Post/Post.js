import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      imag: "",
      content: "",
      author: "",
      authorPicture: ""
    };
  }

  componentDidMount() {
    return axios
      .get(`/api/post/${this.props.match.params.post_id}`)
      .then(response => {
        console.log(response);
        this.setState(() => {
          title: response.data[0].title;
          imag: response.data[0].img;
          content: response.data[0].content;
          author: response.data[0].username;
          authorPicture: response.data[0].profile_pic;
        });
      })
      .catch(e => console.log(e));
  }

  render() {
    console.log(this.props);
    return (
      <div className="post-page">
        <div className="post-cont">
          <div className="left">
            <h2>{this.state.title}</h2>
            <img src={this.state.imag} />
          </div>
          <div className="right">
            <p>by{this.state.author}</p>
            <img src={this.state.authorPicture} alt="the author" />
          </div>
        </div>
      </div>
    );
  }
}
export default Post;
