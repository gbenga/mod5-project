import React, { Component } from "react";
import API from "../../data/API";
import { Header, Icon } from "semantic-ui-react";

export default class PharmaShowPage extends Component {
  state = {
    id: 0,
    address: "",
    name: "",
    phone: 0,
    website: "",
  };

  componentDidMount() {
    API.fetchPharma(this.props.match.params.pharmaId).then((pharmaObj) =>
      this.setState(pharmaObj)
    );
  }
  render() {
    return (
      <Header as="h2" icon textAlign="center">
        <Icon name="building outline" circular />
        <Header.Content>{this.state.name}</Header.Content>
        <Header.Content>{this.state.address}</Header.Content>
        <Header.Content>{this.state.phone}</Header.Content>
        <a href={this.state.website}>Website</a>
      </Header>
    );
  }
}
