import React, { Component } from "react";
import API from "../../data/API";
import RelevantPharmasContainer from "../containers/RelevantPharmasContainer";
import { Header, Icon } from "semantic-ui-react";

export default class MedicineShowPage extends Component {
  state = {
    id: 0,
    instructions: "",
    name: "",
    orders: [],
    pharmas: [],
    price: 0,
    quantity: 0,
    stocks: [],
  };

  componentDidMount() {
    API.fetchMedicine(this.props.match.params.medicineId).then((medObj) =>
      this.setState(medObj)
    );
  }

  render() {
    return (
      <>
        <Header as="h2" icon textAlign="center">
          <Icon name="medkit" circular />
          <Header.Content>{this.state.name}</Header.Content>
          <Header.Content>
            Instructions: {this.state.instructions}
          </Header.Content>
        </Header>
        <RelevantPharmasContainer stocks={this.state.stocks} />
      </>
    );
  }
}
