import React, { Component } from "react";
import API from "../../data/API";
import { Card } from "semantic-ui-react";

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
          {this.state.medicines.map((m) => (
            <Card.Content header={m.name} key={m.id} />
          ))}

          <Card.Content
            extra
            description={`Delivery due: ${this.state.delivery_date}, Order # ${this.state.id}`}
          />
        </Card>
      </div>
    );
  }
}
