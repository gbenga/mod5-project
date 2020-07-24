import React, { Component } from "react";
import API from "../../data/API";
import RelevantPharmasContainer from "../containers/RelevantPharmasContainer";

export default class MedicineShowPage extends Component {
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
        This is a MedicineShowPage for{this.state.name}
        <div>Instructions: {this.state.instructions}</div>
        <RelevantPharmasContainer stocks={this.state.stocks} />
      </div>
    );
  }
}
