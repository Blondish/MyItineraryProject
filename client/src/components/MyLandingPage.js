import React, { Component } from "react";
import darkBeach from "../assets/DarkBeach.jpg"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import homeicon from "../assets/homeIcon.png";
import { Link } from "react-router-dom";

class MyLandingPage extends Component {
  state = {};

  render() {
    let backDrop = {
      backgroundImage: `url(${darkBeach})`, backgroundPosition: "center", backgroundRepeat: "no-repeat",
      backgroundSize: "cover", height: "100vh"
    }
    return (
      <div className="flexdiv" style={backDrop}>
        <div className="container">
          <h1>MyTinerary</h1>
          <h2>
            Find Your perfect trip, designed by insiders who know and love their
            cities
          </h2>
          <div className="browsing">
            <h3>Start Browsing</h3>
            <Link to="/CitiesPage">
              <ArrowForwardIosIcon />
            </Link>
          </div>
        </div>
        <div className="login">
          <h3>Want to build your own MYtinerary?</h3>
          <div>
            <Link className="link" to="/LogInPage">
              Log In
              </Link>
            <Link className="link" to="/CreateAccountPage">
              Create Account
              </Link>
          </div>
        </div>

        {/* <footer className="footer">
          <img alt="right arrow" src={homeicon}></img>
        </footer> */}
      </div>
    );
  }
}

export default MyLandingPage;
