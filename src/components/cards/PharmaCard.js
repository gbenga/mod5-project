import React, { Component } from "react";
import API from "../../data/API";
import { Link } from "react-router-dom";
import { Card, Icon } from "semantic-ui-react";

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
      <Card>
        <Card.Content>
          <Card.Header>{this.state.name}</Card.Header>
          <Card.Meta>Address:{this.state.address}</Card.Meta>
          <Card.Description>Phone:{this.state.phone}</Card.Description>
          <Card.Description>
            <a href={this.state.website}>Website</a>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="user" />
          <Link to={`/pharmas/${this.state.id}`}>Link</Link>
        </Card.Content>
      </Card>
    );
  }
}
