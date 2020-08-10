import React, { Component } from "react";
import { Container, Icon, Header } from "semantic-ui-react";
import Logo from "../info/Logo";
import About from "../info/About";
import Tada from "react-reveal/Tada";
import Flash from "react-reveal/Flash";

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
        <div>
          <Tada spy={this.state.counter}>
            <Header as="h1" onClick={this.handleClick}>
              Get it OTC
            </Header>
          </Tada>
          {/* <div>(click me)</div> */}
          <Flash>
            <Icon name="angle double up" />
          </Flash>
        </div>
        {this.props.user ? (
          <>
            <Container>
              <h2>
                What will you purchase today, {this.props.user.first_name}?
              </h2>
            </Container>
          </>
        ) : null}
        <Container>
          <Logo />
          <Flash>
            <Icon name="angle double down" />
          </Flash>
          <Container>-</Container>
          <About />
        </Container>
      </div>
    );
  }
}
