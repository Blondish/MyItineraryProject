import React, { Component } from "react";
import logo from "../assets/MYtineraryLogo.png";
import circle from "../assets/circled-right-2.png";
import homeicon from "../assets/homeIcon.png";

class MyLandingPage extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <img alt="company logo" src={logo} className="logo"></img>
        <p>
          Find Your perfect trip, designed by insiders who know and love their
          cities
        </p>
        <div className="browsing">
          <h3>Start Browsing</h3>
          <img alt="right arrow" src={circle}></img>
        </div>
        <div className="login">
          <p>Want to build your own MYtinerary?</p>
          <div>
            <a href="/">Log In</a>
            <a href="/">Create Account</a>
          </div>
          <footer>
            <img alt="right arrow" src={homeicon}></img>
          </footer>
        </div>
      </div>
    );
  }
}

export default MyLandingPage;
