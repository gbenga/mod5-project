import React, { Component } from "react";
import API from "../../data/API";
import { Card, Icon } from "semantic-ui-react";

export default class OrderCard extends Component {
  state = {
    id: 0,
    user_id: 0,
    delivery_date: "",
    no_contact: "",
    user: {},
    medicines: [],
    pharmas: [],
  };
  componentDidMount() {
    API.fetchOrder(this.props.order.id).then((orderObj) =>
      this.setState(orderObj)
    );
  }
  render() {
    return (
      <div>
        <Card>
          <Card.Content
            header={this.state.medicines.map((medicine) => medicine.name)}
          />
          <Card.Content
            extra
            description={`Delivery due: ${this.state.delivery_date}`}
          />
        </Card>
      </div>
    );
  }
}
