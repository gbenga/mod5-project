import React, { Component } from "react";
import EditUserForm from "../forms/EditUserForm";
import { Link } from "react-router-dom";

export default class EditUserPage extends Component {
  render() {
    return (
      <div>
        <EditUserForm user={this.props.user} />
        <Link to={"/profile"}>Back to Profile</Link>
      </div>
    );
  }
}
