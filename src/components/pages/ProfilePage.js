import React, { Component } from "react";
import UserOrdersContainer from "../containers/UsersOrdersContainer";
import { Anchor, Box } from "grommet";
import { Card, Header, Button } from "semantic-ui-react";

export default class ProfilePage extends Component {
  handleClickSignOut = () => {
    this.props.signOut();
    this.props.history.push(this.props.redirect);
  };
  handleClickEdit = () => {
    this.props.history.push(`/users/${this.props.user.id}/edit`);
  };

  renderProfilePageInfo = () => {
    return (
      <div>
        <Card color="violet" centered>
          <Header as="h3">
            {this.props.user.first_name} {this.props.user.last_name}
          </Header>
          <div>{this.props.user.address}</div>
          <div>Phone:{this.props.user.phone}</div>
          <div>Date of birth:{this.props.user.dob}</div>
          <div>Allergies:{this.props.user.allergies}</div>
          <div>Sex:{this.props.user.sex}</div>
          <Button.Group>
            <Button onClick={this.handleClickEdit}>Edit</Button>
            <Button.Or />
            <Button positive onClick={this.handleClickSignOut}>
              Sign Out
            </Button>
          </Button.Group>
        </Card>
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
