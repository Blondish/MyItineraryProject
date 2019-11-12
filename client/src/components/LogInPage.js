import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { loginUser } from "../store/actions/loginActions";
import { Redirect } from "react-router-dom";

class LogInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
    console.log(this.state);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.loginUser(this.state);
    console.log(this.props); //empty
  }
  redirect = () => {
    console.log(this.props.user);
    if (this.props.user) {
      return <Redirect to="/"></Redirect>;
    }
  };

  render() {
    return (
      <div>
        {this.redirect()}
        <div className="formstyle">
          <h3>Please Log Into Your Account</h3>
          <form onSubmit={this.handleSubmit}>
            <TextField
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleInputChange}
              label="Email"
              margin="normal"
              variant="outlined"
            />

            <br />
            <TextField
              name="password"
              type="text"
              value={this.state.password}
              onChange={this.handleInputChange}
              label="Password"
              margin="normal"
              variant="outlined"
            />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
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
)(LogInPage);
