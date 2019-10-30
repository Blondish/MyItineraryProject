import React, { Component } from "react";
import MyLandingPage from "./components/MyLandingPage";
import LogInPage from "./components/LogInPage";
import CreateAccountPage from "./components/CreateAccountPage";
import CitiesPage from "./components/CitiesPage";
import Itineraries from "./components/Itineraries";
import ActivitiesPage from "./components/ActivitiesPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
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
            <Route path="/Itineraries/:id/:cityname" component={Itineraries} />
            <Route path="/ActivitiesPage/:id" component={ActivitiesPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
