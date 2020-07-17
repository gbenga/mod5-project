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
        This is the PharmasIndexPage
        <PharmasIndexContainer pharmas={this.state.pharmas} />
        This is the end of the PharmasIndexPage
      </div>
    );
  }
}
