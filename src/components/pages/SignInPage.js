import React, { Component } from "react";
import SignInForm from "../forms/SignInForm";
import { Link } from "react-router-dom";

export default class SignInPage extends Component {
  render() {
    return (
      <div>
        This is the SignInPage
        {this.props.user ? (
          <>
            You are signed in, {this.props.user.first_name}
            <Link to={"/"}>Back to Home</Link>
          </>
        ) : (
          <SignInForm signIn={this.props.signIn} />
        )}
      </div>
    );
  }
}
