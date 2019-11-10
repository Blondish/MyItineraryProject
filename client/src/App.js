import React, { Component } from "react";
import MyLandingPage from "./components/MyLandingPage";
import LogInPage from "./components/LogInPage";
import CreateAccountPage from "./components/CreateAccountPage";
import CitiesPage from "./components/CitiesPage";
import Itineraries from "./components/Itineraries";
import Drawer from "./components/Drawer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";

import AccountMenu from "./components/AccountMenu";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="topicondisplay">
            <AccountMenu></AccountMenu>
            <Drawer></Drawer>
          </div>

          <Switch>
            <Route exact path="/">
              <MyLandingPage />
            </Route>
            <Route path="/LogInPage">
              <LogInPage />
            </Route>
            <Route path="/CreateAccountPage">
              <CreateAccountPage />
            </Route>
            <Route path="/CitiesPage">
              <CitiesPage />
            </Route>
            <Route path="/Itineraries/:id/:cityname" component={Itineraries} />
            <Redirect from="/LogInPage" to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  user: state.users.user,
  token: state.users.token
});

export default connect(
  mapStateToProps,
  null
)(App);
