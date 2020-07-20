import React from "react";
import SignInForm from "../forms/SignInForm";

export default class SignInPage extends React.Component {
  render() {
    return (
      <div>
        This is the SignInPage
        {this.props.user ? (
          <div>Welcome, {this.props.user.first_name}, long time no see</div>
        ) : (
          "Please sign in"
        )}
        <SignInForm signIn={this.props.signIn} />
      </div>
    );
  }
}
