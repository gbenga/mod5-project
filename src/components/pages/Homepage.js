import React, { Component } from "react";
import { Container } from "semantic-ui-react";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <h2>Get it OTC</h2>
        {this.props.user ? (
          <>
            <Container>-</Container>
            <Container>
              <h2>
                What will you get OTC today, {this.props.user.first_name}?
              </h2>
            </Container>
          </>
        ) : (
          <div>Logo Component</div>
        )}
      </div>
    );
  }
}
