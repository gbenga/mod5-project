import React, { Component } from "react";
import API from "../../data/API";
import { Link } from "react-router-dom";

export default class MedicineCard extends Component {
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
    API.fetchMedicine(this.props.medicine.id).then((medObj) =>
      this.setState(medObj)
    );
  }
  render() {
    return (
      <div>
        It's a medicine card for {this.state.name}
        <div>Instructions: {this.state.instructions}</div>
        <div>Available at:{this.state.pharmas.length} pharmacies</div>
        <Link to={`/medicines/${this.state.id}`}>Link to show page</Link>
      </div>
    );
  }
}
