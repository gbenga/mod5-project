import React, { Component } from "react";
import SignUpForm from "../forms/SignUpForm";
import { Link } from "react-router-dom";
import { Anchor } from "grommet";

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
        {this.state.in ? (
          <h2>
            Thank you for signing up, you may now sign in:
            <Anchor label="Sign In" href={"/sign-in"} hoverIndicator />
          </h2>
        ) : (
          <>
            <h2>Enter your details below</h2>
            <SignUpForm successfulSignUp={this.successfulSignUp} />
          </>
        )}
      </div>
    );
  }
}
