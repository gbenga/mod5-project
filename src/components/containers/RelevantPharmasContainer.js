import React, { Component } from "react";
import PharmaCard from "../cards/PharmaCard";

export default class RelevantPharmaContainer extends Component {
  renderPharmaCards = () => {
    // return this.props.pharmas.map(pharma => <PharmaCard pharma={pharma} key={pharma.id}) WILL BE UPDATED WHEN RELATIONSHIPS ARE
  };
  render() {
    return (
      <div>
        This is the RelevantPharmaContainer
        {/* {this.renderPharmaCards()} */}
        RelevantPharmaContainer
      </div>
    );
  }
}
