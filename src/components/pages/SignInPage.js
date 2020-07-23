import React, { Component } from "react";
import SignInForm from "../forms/SignInForm";

export default class SignInPage extends Component {
  render() {
    return (
      <div>
        This is the SignInPage
        <SignInForm signIn={this.props.signIn} />
      </div>
    );
  }
}
