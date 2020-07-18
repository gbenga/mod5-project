import React, { Component } from "react";
import API from "../../data/API";
import { Link } from "react-router-dom";

export default class RelevantPharmaCard extends Component {
  state = {
    medicine_id: 0,
    pharma_id: 0,
    price: 0,
    quantity: 0,
    medicine: {},
    pharma: {},
  };

  componentDidMount() {
    API.fetchStock(this.props.stock.id).then((stockObj) =>
      this.setState(stockObj)
    );
  }
  render() {
    return (
      <div>
        This is a card for {this.state.pharma.name}
        <Link to={`/pharmas/${this.state.pharma_id}`}>Link</Link>
        <div>Address:{this.state.pharma.address}</div>
        <div>Phone:{this.state.pharma.phone}</div>
        <a href={this.state.pharma.website}>Website</a>
      </div>
    );
  }
}
