import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { loginUser } from "../store/actions/loginLogoutActions";
import { returnErrors } from "../store/actions/errorActions";
import { Redirect } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import darkBeach from "../assets/DarkBeach.jpg"

class LogInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      msg: {}
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
    this.props.returnErrors(this.state.msg);
    console.log(this.state.msg);
  }
  redirect = () => {
    if (this.props.user) {
      return <Redirect to="/"></Redirect>;
    }
  };



  render() {
    let backDrop = {
      backgroundImage: `url(${darkBeach})`, backgroundPosition: "center", backgroundRepeat: "no-repeat",
      backgroundSize: "cover", height: "100vh", opacity: "0.7"
    }
    return (
      <div>

        <div style={backDrop}></div>

        <div>
          {this.redirect()}
          <div className="formstyle">
            <h3>Login</h3>
            <AccountCircleIcon />
            <form onSubmit={this.handleSubmit}>
              <TextField
                name="email"
                type="text"
                value={this.state.email}
                onChange={this.handleInputChange}
                label="Email"
                margin="normal"
                variant="outlined"
                fullWidth
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
                fullWidth
              />
              <br />
              <input type="submit" value="Submit" className="submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.users.user,
  token: state.users.token
});
export default connect(mapStateToProps, { loginUser, returnErrors })(LogInPage);
