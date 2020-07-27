import React, { Component } from "react";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        Welcome, this is a home page.
        {this.props.user ? (
          <>Hi {this.props.user.first_name}</>
        ) : (
          <div>Random fact</div>
        )}
      </div>
    );
  }
}
