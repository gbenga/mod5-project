import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Logo from "../info/Logo";
import About from "../info/About";
import Tada from "react-reveal/Tada";

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { counter: 0 };
  }
  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }
  render() {
    return (
      <div>
        <Tada spy={this.state.counter}>
          <h1 onClick={this.handleClick}>Get it OTC</h1>
        </Tada>
        {this.props.user ? (
          <>
            <Container>-</Container>
            <Container>
              <h2>
                What will you get OTC today, {this.props.user.first_name}?
              </h2>
            </Container>
          </>
        ) : null}
        <Container>
          <Logo />
          <About />
        </Container>
      </div>
    );
  }
}
