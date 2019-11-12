import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../store/actions/loginActions";
import { Redirect } from "react-router-dom";

class logOut extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleclick(event) {
    event.preventDefault();
    this.setState({
      user: null,
      token: null
    });
    return <Redirect to="/"></Redirect>;
  }

  render() {
    return (
      <div>
        <button>Log Out {this.handleclick}</button>
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
  { loginUser }
)(logOut);
