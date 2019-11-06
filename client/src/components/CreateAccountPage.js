import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

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
    console.log(value, name);

    this.setState({
      [name]: value
    });
    console.log(this.state);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="formstyle">
        <h3>Please Fill Out the form</h3>
        <form onSubmit={this.handleSubmit}>
          <TextField
            name="username"
            type="text"
            checked={this.state.email}
            onChange={this.handleInputChange}
            label="username"
            margin="normal"
            variant="outlined"
          />
          <br />
          <TextField
            name="email"
            type="text"
            checked={this.state.email}
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
    );
  }
}

export default CreateAccountPage;
