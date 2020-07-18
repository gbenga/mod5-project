import React, { Component } from "react";
import API from "../../data/API";
import { Link } from "react-router-dom";

export default class PharmaCard extends Component {
  state = {
    id: 0,
    address: "",
    name: "",
    phone: 0,
    website: "",
    medicines: [],
    orders: [],
  };

  componentDidMount() {
    API.fetchPharma(this.props.pharma.id).then((pharmaObj) =>
      this.setState(pharmaObj)
    );
  }
  render() {
    return (
      <div>
        This is a card for {this.state.name}
        <Link to={`/pharmas/${this.state.id}`}>Link</Link>
        <div>Address:{this.state.address}</div>
        <div>Phone:{this.state.phone}</div>
        <a href={this.state.website}>Website</a>
      </div>
    );
  }
}
