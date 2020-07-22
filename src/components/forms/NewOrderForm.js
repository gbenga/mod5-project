import React, { Component } from "react";
import API from "../../data/API";

export default class NewOrderForm extends Component {
  state = {
    user_id: 0,
    delivery_date: "",
    no_contact: "",
    stocksToBeOrdered: [],
    stocks: [],
  };

  componentDidMount() {
    this.setState({
      user_id: this.props.user.id,
    });
    API.fetchStocks().then((stocks) =>
      this.setState({ ...this.state, ...{ stocks: stocks } })
    );
  }

  renderStockOptions = () => {
    return this.state.stocks.map((stock) => (
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
    // need to add whatever is in value here into a an object
    // this.setState({
    //   ...this.state,
    //   ...{
    //     stocksToBeOrdered: [...this.state.stocksToBeOrdered, e.target.value],
    //   },
    // });
  };

  handleAddStockToBeOrdered = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      ...{
        stocksToBeOrdered: [
          ...this.state.stocksToBeOrdered,
          {
            valueId: this.state.stocksToBeOrdered.length,
            medicine_id: 0,
            quantity: 0,
          },
        ],
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.user) {
      // create an order, attached to the user. send to backend // will need to change structure of this so its not whole state
      API.postToOrders({ order: this.state })
        //   map over state.stocksToBeOrdered, create OMs for each stock, with order_id from order as in API call before, and medicine_id from the stock.medicine_id in map
        .then(
          (order) =>
            this.state.stocksToBeOrdered.map((stock) => {
              API.postToOrderMedicines({
                order_medicine: {
                  order_id: order.id,
                  medicine_id: stock.medicine_id,
                },
                // at this point I need a medicine_id and a quantity
              });
            })
          // after this, reduce the stock.quantity in the map by 1
          // then reduce stock by 1 w patch request
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
