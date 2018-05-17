import React, { Component } from "react";
import { connect } from "react-redux";
class Dashboard extends Component {
  constructor() {
    super();
  }

  render() {
    return <div>Dashboard</div>;
  }
}

function mapStateToProps(state) {
  return { ...state };
}
export default connect(mapStateToProps)(Dashboard);
