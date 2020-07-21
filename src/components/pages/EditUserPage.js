import React, { Component } from "react";
import EditUserForm from "../forms/EditUserForm";

export default class EditUserPage extends Component {
  render() {
    return (
      <div>
        <EditUserForm userId={this.props.userId} />
      </div>
    );
  }
}
