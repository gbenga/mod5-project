import React, { Component } from "react";
import "./App.css";
import MedicinesIndexPage from "./components/pages/MedicinesIndexPage";
import PharmasIndexPage from "./components/pages/PharmasIndexPage";
import MedicineShowPage from "./components/pages/MedicineShowPage";
import PharmaShowPage from "./components/pages/PharmaShowPage";
import QuickOrderPage from "./components/pages/QuickOrderPage";
import ProfilePage from "./components/pages/ProfilePage";
import SignInPage from "./components/pages/SignInPage";
import Homepage from "./components/pages/Homepage";
import EditUserPage from "./components/pages/EditUserPage";
import SignUpPage from "./components/pages/SignUpPage";
import NewOrderPage from "./components/pages/NewOrderPage";
import LoadingPage from "./components/pages/LoadingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthAPI from "./AuthAPI";
import { Nav, Anchor } from "grommet";

export default class App extends Component {
  state = {
    user: null,
    redirect: "/",
    isLoading: true,
  };

  async componentDidMount() {
    if (localStorage.token) {
      const jso = await AuthAPI.validate(localStorage.token);
      this.signIn(jso.user, jso.token);
    }
    this.setState({ isLoading: false });
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
    if (this.state.isLoading) return <LoadingPage />;

    return (
      <div className="App">
        <Router>
          <Nav direction="row" background="brand" pad="medium">
            <Anchor label="Home" href={"/"} hoverIndicator />
            <Anchor label="Profile" href={"/profile"} hoverIndicator />
            {this.state.user ? (
              <>
                <Anchor label="Medicines" href={"/medicines"} hoverIndicator />
                <Anchor label="Pharmacies" href={"/pharmas"} hoverIndicator />
                <Anchor
                  label="Place a new Order"
                  href={"/new-order"}
                  hoverIndicator
                />
              </>
            ) : null}
          </Nav>
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
                <QuickOrderPage
                  {...routerProps}
                  user={this.state.user}
                  redirect={this.state.redirect}
                />
              )}
            />
            <Route
              exact
              path="/new-order"
              render={(routerProps) => (
                <NewOrderPage
                  {...routerProps}
                  user={this.state.user}
                  redirect={this.state.redirect}
                />
              )}
            />
            <Route
              exact
              path="/users/:userId/edit"
              render={(routerProps) => (
                <EditUserPage {...routerProps} user={this.state.user} />
              )}
            />
            {/* When not signed in, you can only see links to these routes */}
            <Route
              exact
              path="/profile"
              render={(routerProps) => (
                <ProfilePage
                  {...routerProps}
                  user={this.state.user}
                  redirect={this.state.redirect}
                  signOut={this.signOut}
                />
              )}
            />
            <Route exact path="/sign-in">
              <SignInPage signIn={this.signIn} user={this.state.user} />
            </Route>
            <Route
              exact
              path="/sign-up"
              render={(routerProps) => (
                <SignUpPage {...routerProps} user={this.state.user} />
              )}
            />
            <Route exact path="/">
              <Homepage user={this.state.user} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
