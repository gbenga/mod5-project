import React, { Component } from "react";
import RelevantPharmaCard from "../cards/RelevantPharmaCard";

export default class RelevantPharmaContainer extends Component {
  renderRelevantPharmaCards = () => {
    return this.props.stocks.map((stock) => (
      <RelevantPharmaCard stock={stock} key={stock.id} />
    ));
  };
  render() {
    return (
      <div>
        <h3>Available at the following pharmacies:</h3>
        {this.renderRelevantPharmaCards()}
      </div>
    );
  }
}
