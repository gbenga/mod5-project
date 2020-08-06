import React, { Component } from "react";
import SignUpForm from "../forms/SignUpForm";
import { Dimmer, Header, Icon } from "semantic-ui-react";

export default class SignUpPage extends Component {
  state = {
    active: false,
  };

  handleOpen = () => this.setState({ active: true });
  handleClose = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    return (
      <div>
        <Dimmer active={active} onClickOutside={this.handleClose} page>
          <Header as="h2" icon inverted>
            <Icon name="heart" />
            Thanks! You may now sign in using the link below
            <Header.Subheader>
              <a href="/sign-in">Sign In</a>
            </Header.Subheader>
          </Header>
        </Dimmer>
        <div>
          If you would prefer not to make an account, you can sign in with the
          guest details, at the bottom of the page.
        </div>
        <SignUpForm handleOpen={this.handleOpen} />
        <div>
          {" "}
          Guest Sign In Details
          <strong>Username: guest1, Password: guest1</strong>
        </div>
      </div>
    );
  }
}
