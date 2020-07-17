import React, { Component } from "react";
import API from "../../data/API";
import RelevantPharmasContainer from "../containers/RelevantPharmasContainer";

export default class MedicineShowPage extends Component {
  state = {
    id: 0,
    instructions: "",
    name: "",
    pharma: {},
    price: 0,
    quantity: 0,
  };

  componentDidMount() {
    API.fetchMedicine(this.props.match.params.medicineId).then((medObj) =>
      this.setState(medObj)
    );
  }

  render() {
    return (
      <div>
        This is a MedicineShowPage for{this.state.name}
        <div>
          Price: £{this.state.price}, Quantity:
          {this.state.quantity}
        </div>
        <div>{this.state.instructions}</div>
        <RelevantPharmasContainer pharma={this.state.pharma} />
      </div>
    );
  }
}
