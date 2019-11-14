import React, { Component } from "react";
import MyLandingPage from "./components/MyLandingPage";
import LogInPage from "./components/LogInPage";
import CreateAccountPage from "./components/CreateAccountPage";
import CitiesPage from "./components/CitiesPage";
import Itineraries from "./components/Itineraries";
import Favourites from "./components/Favourites";
import Drawer from "./components/Drawer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import { loadUser } from "./store/actions/authActions";

import AccountMenu from "./components/AccountMenu";

import "./App.css";

class App extends Component {
  componentDidMount() {
    const token = localStorage.token;
    if (token) {
      this.props.loadUser();
    }
  }

  render() {
    return (
      <Router>
        <div>
          <div className="topicondisplay">
            <AccountMenu user={this.props.user}></AccountMenu>
            <Drawer user={this.props.user}></Drawer>
          </div>

          <Switch>
            <Route exact path="/">
              <MyLandingPage />
            </Route>
            <Route path="/LogInPage">
              <LogInPage />
            </Route>
            <Route path="/Favourites">
              <Favourites />
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

const mapStateToProps = state => {
  return {
    user: state.users.user,
    token: state.users.token
  };
};

export default connect(mapStateToProps, { loadUser })(App);
