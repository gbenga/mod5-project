import React, { Component } from "react";
import API from "../../data/API";

export default class NewOrderForm extends Component {
  state = {
    delivery_date: "",
    no_contact: "",
  };

  componentDidMount() {
    this.setState({
      user_id: this.props.user.id,
    });
  }
  handleChange = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.user) {
      API.postToOrders({ order: this.state })
        .then((order) =>
          API.postToOrderMedicines({
            order_medicine: {
              order_id: order.id,
              medicine_id: this.props.medicine.id,
            },
          })
        )
        .then(console.log);
      // then reduce stock by 1 w patch request
      //so need to find the stock from relevant pharma card
    } else {
      this.props.history.push(this.props.redirect);
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Medicine:</label>
        <input
          type="text"
          value={this.props.medicine.name}
          readOnly={true}
        ></input>
        <br />
        <label>User:</label>
        <input
          type="text"
          value={this.props.user.first_name}
          readOnly={true}
        ></input>
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
        <button type="submit">Submit order</button>
      </form>
    );
  }
}
