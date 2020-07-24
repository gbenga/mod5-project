import React, { Component } from "react";
import UserOrdersContainer from "../containers/UsersOrdersContainer";
import { Link } from "react-router-dom";

export default class ProfilePage extends Component {
  handleClick = () => {
    this.props.signOut();
    this.props.history.push(this.props.redirect);
  };

  renderProfilePageInfo = () => {
    return (
      <div>
        <div>
          {this.props.user.first_name} {this.props.user.last_name}
        </div>
        <button onClick={this.handleClick}>Sign out</button>
        <Link to={`/users/${this.props.user.id}/edit`}>Edit User</Link>
        User Details
        <div>Address:{this.props.user.address}</div>
        <div>Phone:{this.props.user.phone}</div>
        <div>Date of birth:{this.props.user.dob}</div>
        <div>Allergies:{this.props.user.allergies}</div>
        <div>Sex:{this.props.user.sex}</div>
        <UserOrdersContainer userId={this.props.user.id} />
      </div>
    );
  };

  renderGeneric = () => {
    return (
      <div>
        If you've been here before, please
        <Link to={"/sign-in"}>Sign In</Link>, or if you're new:
        <Link to={"/sign-up"}>Sign Up</Link>
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
