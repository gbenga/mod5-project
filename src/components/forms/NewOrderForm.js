import React, { Component } from "react";
import StocksForForm from "./StocksForForm";
import API from "../../data/API";
import { Label } from "semantic-ui-react";

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

  handleChange = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  updateStateNewOrderForm = (updatedStocks) => {
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
          debugger;
          // && this.props.setOrderDetails(order)
        })
      );
  };
  render() {
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
        <Label pointing="left">
          Please select if you would prefer a no contact delivery
        </Label>
        <br />
        <h2>Medicines</h2>
        <StocksForForm
          stocksToBeOrdered={this.state.stocksToBeOrdered}
          stocks={this.props.stocks}
          updateStateNewOrderForm={this.updateStateNewOrderForm}
        />
        <button onClick={this.handleAddStockToBeOrdered}>+</button>
        <button type="submit">Submit Order</button>
      </form>
    );
  }
}
