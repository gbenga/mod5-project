import React, { Component } from "react";
import UserOrdersContainer from "../containers/UsersOrdersContainer";
import { Anchor, Button as GrommetButton, Box } from "grommet";
import { Card, Header } from "semantic-ui-react";

export default class ProfilePage extends Component {
  handleClick = () => {
    this.props.signOut();
    this.props.history.push(this.props.redirect);
  };

  renderProfilePageInfo = () => {
    return (
      <div>
        <Card color="violet">
          <Header as="h3">
            {this.props.user.first_name} {this.props.user.last_name}
          </Header>

          <div>{this.props.user.address}</div>
          <div>Phone:{this.props.user.phone}</div>
          <div>Date of birth:{this.props.user.dob}</div>
          <div>Allergies:{this.props.user.allergies}</div>
          <div>Sex:{this.props.user.sex}</div>
        </Card>
        <Anchor
          label="Edit User"
          href={`/users/${this.props.user.id}/edit`}
          hoverIndicator
        />
        <GrommetButton label="Sign Out" onClick={this.handleClick} l />
        <UserOrdersContainer userId={this.props.user.id} />
      </div>
    );
  };

  renderGeneric = () => {
    return (
      <div>
        <Box pad="medium">
          If you're new here, please
          <Anchor label="Sign Up" href={"/sign-up"} hoverIndicator />
          <br />
          If you've been here before, please
          <Anchor label="Sign In" href={"/sign-in"} hoverIndicator />
        </Box>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.props.user ? this.renderProfilePageInfo() : this.renderGeneric()}
      </div>
    );
  }
}
