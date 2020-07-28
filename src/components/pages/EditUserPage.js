import React, { Component } from "react";
import EditUserForm from "../forms/EditUserForm";
import { Link } from "react-router-dom";
import { Dimmer, Header, Icon, Container } from "semantic-ui-react";

export default class EditUserPage extends Component {
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
            <Icon name="lock" />
            User details changed.
            <Link to={"/profile"}>Back to Profile</Link>
          </Header>
        </Dimmer>
        <EditUserForm user={this.props.user} handleOpen={this.handleOpen} />
      </div>
    );
  }
}
