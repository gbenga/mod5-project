import React, { Component } from "react";
import SignUpForm from "../forms/SignUpForm";
import { Link } from "react-router-dom";

export default class SignUpPage extends Component {
  state = {
    in: null,
  };

  successfulSignUp = () => {
    this.setState({ in: true });
    console.log("success");
  };

  render() {
    return (
      <div>
        This is the signup page
        {this.state.in ? (
          <>
            You've signed up successfully, now sign in
            <Link to={"/sign-in"}>Sign in here</Link>
          </>
        ) : (
          <SignUpForm successfulSignUp={this.successfulSignUp} />
        )}
      </div>
    );
  }
}
