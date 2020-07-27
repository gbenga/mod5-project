import React, { Component } from "react";
import API from "../../data/API";
import { Link } from "react-router-dom";
import { Card, Icon } from "semantic-ui-react";

export default class PharmaCard extends Component {
  state = {
    id: 0,
    address: "",
    name: "",
    phone: "",
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
      <Card>
        <Card.Content>
          <Card.Header>{this.state.name}</Card.Header>
          <Card.Meta>Address:{this.state.address}</Card.Meta>
          <Card.Meta>Current Stock: {this.state.medicines.length}</Card.Meta>
          <Card.Description>
            <Icon name="phone" />
            {this.state.phone}
          </Card.Description>
          <Card.Description>
            <a href={this.state.website}>Visit Website</a>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="zoom-in" />
          <Link to={`/pharmas/${this.state.id}`}>Find out more</Link>
        </Card.Content>
      </Card>
    );
  }
}
