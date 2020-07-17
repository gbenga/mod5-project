import React, { Component } from "react";
import PharmaCard from "../cards/PharmaCard";

export default class PharmasIndexContainer extends Component {
  renderPharmaCards = () => {
    return this.props.pharmas.map((pharma) => (
      <PharmaCard pharma={pharma} key={pharma.id} />
    ));
  };
  render() {
    return (
      <div>
        This is the Pharmas Index Container
        {this.renderPharmaCards()}
        This is the end of Pharmas Index Container
      </div>
    );
  }
}
