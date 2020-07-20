import React, { Component } from "react";
import API from "../../data/API";

export default class OrderCard extends Component {
  state = {
    id: 0,
    user_id: 0,
    delivery_date: "",
    no_contact: "",
    user: {},
    medicines: [],
    pharmas: [],
  };
  componentDidMount() {
    API.fetchOrder(this.props.order.id).then((orderObj) =>
      this.setState(orderObj)
    );
  }
  render() {
    return (
      <div>
        This is an Order Card
        <div>Delivery date {this.state.delivery_date}</div>
        <div>
          This order contains:
          {this.state.medicines.map((medicine) => medicine.name)}
        </div>
      </div>
    );
  }
}
