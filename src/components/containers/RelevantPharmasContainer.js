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
        This is the RelevantPharmaContainer
        {this.renderRelevantPharmaCards()}
        This is the end of the RelevantPharmaContainer
      </div>
    );
  }
}
