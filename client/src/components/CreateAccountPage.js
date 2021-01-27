import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { createNewUser } from "../store/actions/createuserAction";
import darkBeach from "../assets/DarkBeach.jpg"


class CreateAccountPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: ""
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
    console.log(this.state);
    this.props.createNewUser(this.state);
  }

  render() {
    let backDrop = {
      backgroundImage: `url(${darkBeach})`, backgroundPosition: "center", backgroundRepeat: "no-repeat",
      backgroundSize: "cover", height: "100vh", opacity: "0.7"
    }
    return (
      <>
        <div style={backDrop}></div>
        <div className="formstyle">
          <h3>Please Fill Out the form</h3>
          <form onSubmit={this.handleSubmit}>
            <TextField
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleInputChange}
              label="username"
              margin="normal"
              variant="outlined"
              fullWidth
            />
            <br />
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
      </>
    );
  }
}

const mapStateToProps = state => ({
  value: state.value
});
export default connect(
  mapStateToProps,
  { createNewUser }
)(CreateAccountPage);
