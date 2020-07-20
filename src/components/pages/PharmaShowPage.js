import React, { Component } from "react";
import API from "../../data/API";

export default class PharmaShowPage extends Component {
  state = {
    id: 0,
    address: "",
    name: "",
    phone: 0,
    website: "",
  };

  componentDidMount() {
    if (this.props.user) {
      API.fetchPharma(this.props.match.params.pharmaId).then((pharmaObj) =>
        this.setState(pharmaObj)
      );
    } else {
      this.props.history.push(this.props.redirect);
    }
  }
  render() {
    return (
      <div>
        This is a Pharma Show Page
        {this.state.name}
        <div>Address:{this.state.address}</div>
        <div>Phone:{this.state.phone}</div>
        <a href={this.state.website}>Website</a>
        This is the end of Pharma Show Page
      </div>
    );
  }
}
