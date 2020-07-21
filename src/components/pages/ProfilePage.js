import React, { Component } from "react";
import UserOrdersContainer from "../containers/UsersOrdersContainer";
import { Link } from "react-router-dom";

export default class ProfilePage extends Component {
  render() {
    return (
      <div>
        Hi {this.props.user.first_name}, how's it going?
        <button onClick={this.props.signOut}>Sign out</button>
        <Link to={`/users/${this.props.user.id}/edit`}>Edit User</Link>
        User Details
        <div>
          Name: {this.props.user.last_name}, {this.props.user.first_name}
        </div>
        <div>Address:{this.props.user.address}</div>
        <div>Phone:{this.props.user.phone}</div>
        <div>Date of birth:{this.props.user.dob}</div>
        <div>Allergies:{this.props.user.allergies}</div>
        <div>Sex:{this.props.user.sex}</div>
        <UserOrdersContainer userId={this.props.user.id} />
      </div>
    );
  }
}
