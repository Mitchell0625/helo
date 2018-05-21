import React, { Component } from "react";
import { connect } from "react-redux";
class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      checked: true
    };
  }

  render() {
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
  return { ...state };
}
export default connect(mapStateToProps)(Dashboard);
