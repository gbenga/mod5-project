import React, { Component } from "react";
import UserOrdersContainer from "../containers/UsersOrdersContainer";
import { Anchor } from "grommet";
import {
  Header,
  Button,
  Segment,
  Grid,
  Divider,
  Message,
} from "semantic-ui-react";

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
        <Header as="h3" icon textAlign="center">
          <Header.Content>
            {this.props.user.first_name} {this.props.user.last_name}
          </Header.Content>
          <Header.Content>{this.props.user.address}</Header.Content>
          <Header.Content>{this.props.user.phone}</Header.Content>
          <Header.Content>{this.props.user.dob}</Header.Content>
          <Header.Content>{this.props.user.allergies}</Header.Content>
          <Header.Content>{this.props.user.sex}</Header.Content>
        </Header>

        <Button.Group>
          <Button
            labelPosition="left"
            icon="edit outline"
            content="Edit User"
            onClick={this.handleClickEdit}
          />
          <Button
            labelPosition="right"
            icon="dont"
            content="Sign Out"
            onClick={this.handleClickSignOut}
          />
        </Button.Group>
        <UserOrdersContainer userId={this.props.user.id} />
      </div>
    );
  };

  renderGeneric = () => {
    return (
      <Segment placeholder>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <Message>
              <Message.Header>If you're new here, please</Message.Header>
              <Anchor label="Sign Up" href={"/sign-up"} hoverIndicator />
            </Message>
          </Grid.Column>

          <Grid.Column verticalAlign="middle">
            <Message>
              <Message.Header>
                If you've been here before, please
              </Message.Header>
              <Anchor label="Sign In" href={"/sign-in"} hoverIndicator />
            </Message>
          </Grid.Column>
        </Grid>

        <Divider vertical>Or</Divider>
      </Segment>
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
