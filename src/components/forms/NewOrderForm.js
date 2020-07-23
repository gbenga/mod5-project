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
  // abstract into component
  renderStockOptions = () => {
    return this.props.stocks.map((stock) => (
      <option key={stock.id} value={stock.id}>
        {stock.medicine.name}, {stock.quantity} available at {stock.pharma.name}
      </option>
    ));
  };
  //abstract

  handleChange = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleStockToBeOrderedChange = (stockId, index) => {
    // Use stock id from value of select to filter through the stocks, return the whole stock object
    // Now there is access to the medicine and stock ids
    const stockInQuestion = this.props.stocks.find((s) => s.id == stockId);
    // On change, this will map through the stockToBeOrdered and compare the id of
    // the stock has just been selected, the stocks in stocksToBeOrdered
    // If there is a match, update the specific stockToBeOrdered with what has just been selected
    // If not, just return the stock with nothing done to it
    const updatedStocks = this.state.stocksToBeOrdered.map((s, i) =>
      i === index
        ? {
            ...s,
            medicineId: stockInQuestion.medicine_id,
            stockId: stockInQuestion.id,
            quantity: stockInQuestion.quantity - 1,
          }
        : s
    );
    this.setState({
      stocksToBeOrdered: [...updatedStocks],
    });
  };

  handleAddStockToBeOrdered = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      ...{
        stocksToBeOrdered: [
          ...this.state.stocksToBeOrdered,
          {
            stockId: 0,
            medicineId: 0,
            quantity: 0,
          },
        ],
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.user) {
      // This will create an order, attached to the user who is logged in
      API.postToOrders({ order: this.state })
        // Then map over the stocksToBeOrdered, and create OMs for each one, with an order id from the order just made, and medicine id from the stock
        .then((order) =>
          this.state.stocksToBeOrdered.map((stock) => {
            API.postToOrderMedicines({
              order_medicine: {
                order_id: order.id,
                medicine_id: stock.medicineId,
              },
            })
              // Still while mapping over the stocksToBeOrdered, update the quantity of the stock
              .then((om) =>
                API.patchToStock(
                  {
                    quantity: stock.quantity,
                  },
                  stock.stockId
                )
              );
          })
        );
    } else {
      this.props.history.push(this.props.redirect);
    }
  };
  render() {
    // abstract into component
    let stocksToBeOrdered = this.state.stocksToBeOrdered.map((stock, idx) => (
      <div key={idx}>
        <label>Medicine Name</label>
        <select
          onChange={(e) =>
            this.handleStockToBeOrderedChange(e.target.value, idx)
          }
        >
          <option value="0"> - Select a medicine - </option>
          {this.renderStockOptions()}
        </select>
      </div>
    ));
    // abstract
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
        {/* <StocksToBeOrdered stocksToBeOrdered={this.state.stocksToBeOrdered} /> */}
        <button onClick={this.handleAddStockToBeOrdered}>+</button>
        <button type="submit">Submit Order</button>
      </form>
    );
  }
}
