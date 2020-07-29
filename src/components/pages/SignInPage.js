import React, { Component } from "react";
import SignInForm from "../forms/SignInForm";
import { Container } from "semantic-ui-react";

export default class SignInPage extends Component {
  render() {
    return (
      <div>
        {this.props.user ? (
          <>
            <Container>-</Container>
            <Container>
              <h2>Welcome back, {this.props.user.first_name}</h2>
              <a href={"/"}>Back to Home</a>
            </Container>
          </>
        ) : (
          <SignInForm signIn={this.props.signIn} />
        )}
      </div>
    );
  }
}
