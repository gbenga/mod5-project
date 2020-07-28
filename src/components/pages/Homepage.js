import React, { Component } from "react";
import { Container } from "semantic-ui-react";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        Welcome, this is a home page.
        {this.props.user ? (
          <>
            <Container>-</Container>
            <Container>
              <h2>Hi {this.props.user.first_name}</h2>
            </Container>
          </>
        ) : (
          <div>Random fact</div>
        )}
      </div>
    );
  }
}
