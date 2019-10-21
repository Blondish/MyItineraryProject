import React, { Component } from "react";
import logo from "../assets/MYtineraryLogo.png";
import circle from "../assets/circled-right-2.png";
import homeicon from "../assets/homeIcon.png";
import { Link } from "react-router-dom";

class MyLandingPage extends Component {
  state = {};
  render() {
    return (
      <div className="flexdiv">
        <img alt="company logo" src={logo} className="logo"></img>

        <div className="container">
          <p>
            Find Your perfect trip, designed by insiders who know and love their
            cities
          </p>
          <div className="browsing">
            <h3>Start Browsing</h3>
            <Link to="/CitiesPage">
              <img alt="right arrow" src={circle}></img>
            </Link>
          </div>
          <div className="login">
            <h4>Want to build your own MYtinerary?</h4>
            <div>
              <Link className="link" to="/LogInPage">
                Log In
              </Link>
              <Link className="link" to="/CreateAccountPage">
                Create Account
              </Link>
            </div>
          </div>
        </div>
        <footer className="footer">
          <img alt="right arrow" src={homeicon}></img>
        </footer>
      </div>
    );
  }
}

export default MyLandingPage;
