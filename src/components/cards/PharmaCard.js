import React, { Component } from "react";
import API from "../../data/API";

export default class PharmaCard extends Component {
  state = {
    id: 0,
    address: "",
    name: "",
    phone: 0,
    website: "",
  };

  componentDidMount() {
    API.fetchPharma(this.props.pharma).then((pharmaObj) =>
      this.setState(pharmaObj)
    );
  }
  render() {
    return (
      <div>
        This is a card for {this.state.name}
        <div>Address:{this.state.address}</div>
        <div>Phone:{this.state.phone}</div>
        <a href={this.state.website}>Website</a>
      </div>
    );
  }
}
