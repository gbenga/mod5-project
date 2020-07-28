import React, { Component } from "react";
import API from "../../data/API";
import OrderCard from "../cards/OrderCard";
import { Grid, Header } from "semantic-ui-react";

export default class UsersOrdersContainer extends Component {
  state = {
    address: "",
    allergies: "",
    dob: "",
    first_name: "",
    id: 0,
    last_name: "",
    medicines: [],
    orders: [],
    phone: "",
    sex: "",
    username: "",
  };
  componentDidMount() {
    API.fetchUser(this.props.userId).then((userObj) => this.setState(userObj));
  }

  renderOrderCards = () => {
    return this.state.orders.map((order) => (
      <Grid.Column key={order.id}>
        <OrderCard order={order} key={order.id} />
      </Grid.Column>
    ));
  };
  render() {
    return (
      <div>
        <Header as="h3" icon textAlign="center">
          Orders
        </Header>
        <Grid divided>
          <Grid.Row columns={4}>{this.renderOrderCards()}</Grid.Row>
        </Grid>
      </div>
    );
  }
}
