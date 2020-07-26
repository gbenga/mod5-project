import React, { Component } from "react";
import API from "../../data/API";
import PharmasIndexContainer from "../containers/PharmasIndexContainer";

export default class PharmasIndexPage extends Component {
  state = {
    pharmas: [],
  };

  componentDidMount() {
    API.fetchPharmas().then((pharmas) =>
      this.setState({ pharmas: [...this.state.pharmas, ...pharmas] })
    );
  }
  render() {
    return (
      <div>
        <h2>Pharmacies</h2>
        <PharmasIndexContainer pharmas={this.state.pharmas} />
      </div>
    );
  }
}
