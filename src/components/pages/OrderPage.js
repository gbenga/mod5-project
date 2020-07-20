import React, { Component } from "react";
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
    users: [],
    form: {},
  };

  componentDidMount() {
    API.fetchMedicine(this.props.match.params.medicineId).then((medObj) =>
      this.setState(medObj)
    );
    API.fetchUsers().then((users) => this.setState({ users: users }));
    // To be edited once auth is done, so it knows which user is logged in
  }

  handleChange = (e) => {
    const form = { ...this.state.form };
    form[e.currentTarget.name] = e.currentTarget.value;
    console.log(form);
    this.setState({ form });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.user) {
      API.postToOrders({ order: this.state.form })
        .then((order) =>
          API.postToOrderMedicines({
            order_medicine: { order_id: order.id, medicine_id: this.state.id },
          })
        )
        .then(console.log);
      // then reduce stock by 1 w patch request
    } else {
      this.props.history.push(this.props.redirect);
    }
  };
  render() {
    return (
      <div>
        This is the OrderPage
        <form onSubmit={this.handleSubmit}>
          <label>Medicine:</label>
          <input
            type="text"
            value={this.state.name}
            readOnly={true}
            onChange={this.handleChange}
          ></input>
          <br />
          <label>User:</label>
          <select name="user_id" onChange={this.handleChange}>
            {this.state.users.map((user) => (
              <option key={user.id}>{user.id}</option>
            ))}
          </select>
          <br />
          <label>Delivery date</label>
          <input
            type="date"
            name="delivery_date"
            onChange={this.handleChange}
          ></input>
          <br />
          <label>No contact?</label>
          <input
            type="checkbox"
            name="no_contact"
            onChange={this.handleChange}
          ></input>
          <button>Submit order</button>
        </form>
      </div>
    );
  }
}
