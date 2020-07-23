import React, { Component } from "react";

export default class StocksForForm extends Component {
  renderStockOptions = () => {
    return this.props.stocks.map((stock) => (
      <option key={stock.id} value={stock.id}>
        {stock.medicine.name}, {stock.quantity} available at {stock.pharma.name}
      </option>
    ));
  };

  handleStockToBeOrderedChange = (stockId, index) => {
    // Use stock id from value of select to filter through the stocks, return the whole stock object
    // Now there is access to the medicine and stock ids
    const stockInQuestion = this.props.stocks.find((s) => s.id == stockId);
    // On change, this will map through the stockToBeOrdered and compare the id of
    // the stock has just been selected, the stocks in stocksToBeOrdered
    // If there is a match, update the specific stockToBeOrdered with what has just been selected
    // If not, just return the stock with nothing done to it
    const updatedStocks = this.props.stocksToBeOrdered.map((s, i) =>
      i === index
        ? {
            ...s,
            medicineId: stockInQuestion.medicine_id,
            stockId: stockInQuestion.id,
            quantity: stockInQuestion.quantity - 1,
          }
        : s
    );
    this.props.updateStateNewOrderForm(updatedStocks);
  };

  render() {
    return (
      <div>
        {this.props.stocksToBeOrdered.map((stock, idx) => (
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
        ))}
      </div>
    );
  }
}
