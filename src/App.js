import React, { Component } from "react";
import MyLandingPage from "./components/MyLandingPage";
import LogInPage from "./components/LogInPage";
import CreateAccountPage from "./components/CreateAccountPage";
import CitiesPage from "./components/CitiesPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    // <div>{<MyLandingPage />}</div>;
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/LogInPage">LogInPage</Link>
            </li>
            <li>
              <Link to="/CreateAccountPage">CreateAccountPage</Link>
            </li>
            <li>
              <Link to="/CitiesPage">CitiesPage</Link>
            </li>
          </ul>

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
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
