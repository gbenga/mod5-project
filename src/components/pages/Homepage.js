import React, { Component } from "react";
import { Container } from "semantic-ui-react";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to OTC</h2>
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
