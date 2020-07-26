import React, { Component } from "react";
import SignInForm from "../forms/SignInForm";
import { Anchor } from "grommet";

export default class SignInPage extends Component {
  render() {
    return (
      <div>
        {this.props.user ? (
          <>
            You are signed in, {this.props.user.first_name}
            <Anchor label="Back to Home" href={"/"} hoverIndicator />
          </>
        ) : (
          <SignInForm signIn={this.props.signIn} />
        )}
      </div>
    );
  }
}
