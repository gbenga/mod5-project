import React, { Component } from "react";
import "./App.css";
import MedicinesIndexPage from "./components/pages/MedicinesIndexPage";
import PharmasIndexPage from "./components/pages/PharmasIndexPage";
import MedicineShowPage from "./components/pages/MedicineShowPage";
import PharmaShowPage from "./components/pages/PharmaShowPage";
import OrderPage from "./components/pages/OrderPage";
import ProfilePage from "./components/pages/ProfilePage";
import SignInPage from "./components/pages/SignInPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AuthAPI from "./AuthAPI";

export default class App extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    if (localStorage.token) {
      AuthAPI.validate(localStorage.token).then((json) =>
        this.signIn(json.user, json.token)
      );
    }
  }

  signIn = (user, token) => {
    this.setState({
      user,
    });
    localStorage.token = token;
  };

  render() {
    return (
      <div className="App">
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/medicines">Medicines</Link>
            </li>
            <li>
              <Link to="/pharmas">Pharmacies</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/medicines">
              <MedicinesIndexPage />
            </Route>
            <Route exact path="/pharmas">
              <PharmasIndexPage />
            </Route>
            <Route
              exact
              path="/medicines/:medicineId"
              render={(routerProps) => <MedicineShowPage {...routerProps} />}
            />
            <Route
              exact
              path="/pharmas/:pharmaId"
              render={(routerProps) => <PharmaShowPage {...routerProps} />}
            />
            <Route
              exact
              path="/medicines/:medicineId/order"
              render={(routerProps) => <OrderPage {...routerProps} />}
            />
            <Route exact path="/profile">
              <ProfilePage />
            </Route>
            <Route exact path="/sign-in">
              <SignInPage signIn={this.signIn} user={this.state.user} />
            </Route>
            <Route exact path="/">
              <div>Just a placeholder for a homepage</div>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
