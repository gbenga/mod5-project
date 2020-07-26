import React, { Component } from "react";
import API from "../../data/API";
import OrderCard from "../cards/OrderCard";
import { Grid, Card } from "semantic-ui-react";

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
      <Grid.Column>
        <OrderCard order={order} key={order.id} />
      </Grid.Column>
    ));
  };
  render() {
    return (
      <div>
        Here are your current orders:
        <Grid columns="three" divided>
          <Grid.Row>{this.renderOrderCards()}</Grid.Row>
        </Grid>
      </div>
    );
  }
}
