import React, { Component } from "react";
import API from "../../data/API";
import { Link } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";

export default class RelevantPharmaCard extends Component {
  state = {
    id: 0,
    medicine_id: 0,
    pharma_id: 0,
    price: 0,
    quantity: 0,
    medicine: {},
    pharma: {},
  };

  componentDidMount() {
    API.fetchStock(this.props.stock.id).then((stockObj) =>
      this.setState(stockObj)
    );
  }

  render() {
    return (
      <Card centered>
        <Card.Content>
          <Card.Header>{this.state.pharma.name}</Card.Header>
          <Card.Meta>{this.state.pharma.address}</Card.Meta>
          <Card.Description>
            <strong>£{this.state.price}0</strong> ~~ {this.state.quantity} in
            stock
          </Card.Description>
          <Card.Description></Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="purple">
              <Link to={`/pharmas/${this.state.pharma_id}`}>
                More info about this Pharmacy
              </Link>
            </Button>
            <Button basic color="blue" onClick={this.handleClickQuickOrder}>
              <Link to={`/medicines/${this.state.medicine.id}/order`}>
                Quick Order Now
              </Link>
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}
