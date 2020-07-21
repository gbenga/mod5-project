import React, { Component } from "react";
import NewOrderForm from "../forms/NewOrderForm";
import API from "../../data/API";

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
    //Will pass down as a prop from App
    // API.fetchUsers().then((users) => this.setState({ users: users }));
    // To be edited once auth is done, so it knows which user is logged in
    // will do this after separating form out
  }

  render() {
    return (
      <div>
        This is the OrderPage
        <NewOrderForm user={this.props.user} medicine={this.state} />
      </div>
    );
  }
}
