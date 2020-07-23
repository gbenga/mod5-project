import React, { Component } from "react";
import API from "../../data/API";

export default class NewOrderForm extends Component {
  state = {
    user_id: 0,
    delivery_date: "",
    no_contact: "",
    stocksToBeOrdered: [],
  };

  componentDidMount() {
    this.setState({
      user_id: this.props.user.id,
    });
  }

  renderStockOptions = () => {
    return this.props.stocks.map((stock) => (
      <option key={stock.id} value={stock.id}>
        {stock.medicine.name}, {stock.quantity} available at {stock.pharma.name}
      </option>
    ));
  };

  handleChange = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleStockToBeOrderedChange = (e) => {
    console.log(e.target.value);
    // ideally on change of value, would add the object for that stock into stockToBeOrdered
    // but otherwise, need to add something that will allow us to later add the whole object into stockToBeOrdered
  };

  handleAddStockToBeOrdered = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      ...{
        stocksToBeOrdered: [
          ...this.state.stocksToBeOrdered,
          {
            medicine_id: 0,
            quantity: 0,
          },
        ],
      },
    });
  };
  // What I need state to look like for this handleSubmit
  // state = {
  //   user_id: 0,
  //   delivery_date: "",
  //   no_contact: "",
  //   stocksToBeOrdered: [
  //     {
  //       id: 0,
  //       medicine_id : 0,
  //       quantity : 0
  //     },
  //     ..........
  //     {
  //       id: 0,
  //       medicine_id : 0,
  //       quantity : 0
  //     },
  //   ],
  // };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.user) {
      // create an order, attached to the user. send to backend
      // will need to make a new obj here to exclude stocksToBeOrdered
      API.postToOrders({ order: this.state })
        //   map over state.stocksToBeOrdered, create OMs for each stock, with order_id from order as in API call before, and medicine_id from the stock.medicine_id in map
        .then((order) =>
          this.state.stocksToBeOrdered.map((stock) => {
            API.postToOrderMedicines({
              order_medicine: {
                order_id: order.id,
                medicine_id: stock.medicine_id,
              },
            })
              // after this, reduce the stock.quantity in the map by 1
              .then((om) =>
                API.patchToStock(
                  {
                    quantity: stock.quantity - 1,
                  },
                  stock.id
                )
              );
          })
        )
        .then(console.log);
    } else {
      this.props.history.push(this.props.redirect);
    }
  };
  render() {
    let stocksToBeOrdered = this.state.stocksToBeOrdered.map((stock, idx) => (
      <div key={idx}>
        <label>Medicine Name</label>
        <select onChange={this.handleStockToBeOrderedChange}>
          {this.renderStockOptions()}
        </select>
      </div>
    ));
    return (
      <form onSubmit={this.handleSubmit}>
        <label>User:</label>
        <input
          type="text"
          value={this.props.user.first_name}
          readOnly={true}
        ></input>
        <br />
        <label>Delivery date:</label>
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
        <br />
        <h2>Medicines</h2>
        {stocksToBeOrdered}
        <button onClick={this.handleAddStockToBeOrdered}>+</button>
        <button type="submit">Submit Order</button>
      </form>
    );
  }
}
