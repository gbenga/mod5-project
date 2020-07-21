import React, { Component } from "react";
import "./App.css";
import MedicinesIndexPage from "./components/pages/MedicinesIndexPage";
import PharmasIndexPage from "./components/pages/PharmasIndexPage";
import MedicineShowPage from "./components/pages/MedicineShowPage";
import PharmaShowPage from "./components/pages/PharmaShowPage";
import OrderPage from "./components/pages/OrderPage";
import ProfilePage from "./components/pages/ProfilePage";
import SignInPage from "./components/pages/SignInPage";
import Homepage from "./components/pages/Homepage";
import EditUserPage from "./components/pages/EditUserPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AuthAPI from "./AuthAPI";

export default class App extends Component {
  state = {
    user: null,
    redirect: "/",
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
  signOut = () => {
    this.setState({
      user: null,
    });
    localStorage.removeItem("token");
  };

  render() {
    return (
      <div className="App">
        {this.state && this.state.user && (
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
              <Route
                exact
                path="/medicines"
                render={(routerProps) => (
                  <MedicinesIndexPage
                    {...routerProps}
                    user={this.state.user}
                    redirect={this.state.redirect}
                  />
                )}
              />
              <Route
                exact
                path="/pharmas"
                render={(routerProps) => (
                  <PharmasIndexPage
                    {...routerProps}
                    user={this.state.user}
                    redirect={this.state.redirect}
                  />
                )}
              />
              <Route
                exact
                path="/medicines/:medicineId"
                render={(routerProps) => (
                  <MedicineShowPage
                    {...routerProps}
                    user={this.state.user}
                    redirect={this.state.redirect}
                  />
                )}
              />
              <Route
                exact
                path="/pharmas/:pharmaId"
                render={(routerProps) => (
                  <PharmaShowPage
                    {...routerProps}
                    user={this.state.user}
                    redirect={this.state.redirect}
                  />
                )}
              />
              <Route
                exact
                path="/medicines/:medicineId/order"
                render={(routerProps) => (
                  <OrderPage
                    {...routerProps}
                    user={this.state.user}
                    redirect={this.state.redirect}
                  />
                )}
              />
              <Route
                exact
                path="/profile"
                render={(routerProps) => (
                  <ProfilePage
                    {...routerProps}
                    user={this.state.user}
                    signOut={this.signOut}
                  />
                )}
              />
              <Route
                exact
                path="/users/:userId/edit"
                render={(routerProps) => (
                  <EditUserPage {...routerProps} userId={this.state.user.id} />
                )}
              />
              <Route exact path="/sign-in">
                <SignInPage signIn={this.signIn} user={this.state.user} />
              </Route>
              <Route exact path="/">
                <Homepage />
              </Route>
            </Switch>
          </Router>
        )}
      </div>
    );
  }
}
