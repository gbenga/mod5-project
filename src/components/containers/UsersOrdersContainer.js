import React, { Component } from "react";
import API from "../../data/API";
import OrderCard from "../cards/OrderCard";

export default class UsersOrdersContainer extends Component {
  state = {
    address: "",
    allergies: "",
    dob: "",
    first_name: "",
    id: 0,
    last_name: "",
    medicines: [],
    orders: [],
    phone: "",
    sex: "",
    username: "",
  };
  componentDidMount() {
    API.fetchUser(this.props.userId).then((userObj) => this.setState(userObj));
  }

  renderOrderCards = () => {
    return this.state.orders.map((order) => (
      <OrderCard order={order} key={order.id} />
    ));
  };
  render() {
    return (
      <div>
        This is the users orders UsersOrdersContainer Here are your current
        orders:
        {this.renderOrderCards()}
        This is the users orders UsersOrdersContainer
      </div>
    );
  }
}
