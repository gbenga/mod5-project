import React, { Component } from "react";
import NewOrderForm from "../forms/NewOrderForm";

export default class NewOrderPage extends Component {
  render() {
    return (
      <div>
        This is the new order page
        <NewOrderForm user={this.props.user} />
      </div>
    );
  }
}
