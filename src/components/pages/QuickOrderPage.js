import React, { Component } from "react";
import QuickOrderForm from "../forms/QuickOrderForm";
import API from "../../data/API";
import { Button, Checkbox, Form } from "semantic-ui-react";

export default class OrderPage extends Component {
  state = {
    id: 0,
    instructions: "",
    name: "",
    orders: [],
    pharmas: [],
    price: 0,
    quantity: 0,
    stocks: [],
  };

  componentDidMount() {
    API.fetchMedicine(this.props.match.params.medicineId).then((medObj) =>
      this.setState(medObj)
    );
  }

  render() {
    return (
      <div>
        <QuickOrderForm user={this.props.user} medicine={this.state} />
      </div>
    );
  }
}
