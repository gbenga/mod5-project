import React, { Component } from "react";
import API from "../../data/API";

export default class MedicineCard extends Component {
  state = {
    id: 0,
    instructions: "",
    name: "",
    pharma: null,
    price: 0,
    quantity: 0,
  };
  componentDidMount() {
    API.fetchMedicine(this.props.medicine).then((medObj) =>
      this.setState(medObj)
    );
  }
  render() {
    return (
      <div>
        It's a medicine card for {this.state.name}
        <div>
          Price: £{this.state.price}, Quantity:
          {this.state.quantity}
        </div>
        <div>{this.state.instructions}</div>
      </div>
    );
  }
}
