import React, { Component } from "react";
import API from "../../data/API";
import { Link } from "react-router-dom";
import { Card, Icon } from "semantic-ui-react";

export default class MedicineCard extends Component {
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
    API.fetchMedicine(this.props.medicine.id).then((medObj) =>
      this.setState(medObj)
    );
  }
  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header>{this.state.name}</Card.Header>
          <Card.Description>
            Available at: {this.state.pharmas.map((pharma) => pharma.name)}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="zoom-in" />
          <Link to={`/medicines/${this.state.id}`}>More info</Link>
        </Card.Content>
      </Card>
    );
  }
}
