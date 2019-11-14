import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../store/actions/loginLogoutActions";
// import { Redirect } from "react-router-dom";

class logOut extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleclick = () => {
    this.props.logoutUser();
  };

  render() {
    return (
      <div>
        <button onClick={this.handleclick}>Log Out </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.users.user,
  token: state.users.token
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(logOut);
