import React, { Component } from "react";
import QuickOrderForm from "../forms/QuickOrderForm";
import API from "../../data/API";
import { Dimmer, Header, Icon, Container } from "semantic-ui-react";

export default class OrderPage extends Component {
  state = {
    id: 0,
    instructions: "",
    name: "",
    orders: [],
    pharmas: [],
    price: 0,
    quantity: 0,
    stocks: [],
    active: false,
    newOrder: {
      order: {
        delivery_date: "",
      },
      medicine: {
        name: "",
      },
    },
  };

  componentDidMount() {
    API.fetchMedicine(this.props.match.params.medicineId).then((medObj) =>
      this.setState(medObj)
    );
  }

  handleOpen = () => this.setState({ active: true });
  handleClose = () => this.setState({ active: false });
  setOrderDetails = (order) => {
    this.setState({ newOrder: order });
  };

  readOrderDetails = () => {
    return (
      <Header.Subheader>
        Order #{this.state.newOrder.id}, will arrive on{" "}
        {this.state.newOrder.order.delivery_date}, containing{" "}
        {this.state.newOrder.medicine.name}
      </Header.Subheader>
    );
  };

  render() {
    const { active } = this.state;

    return (
      <div>
        <Dimmer active={active} onClickOutside={this.handleClose} page>
          <Header as="h2" icon inverted>
            <Icon name="heart" />
            Thanks for your order
            {this.readOrderDetails()}
          </Header>
        </Dimmer>
        <Container>-</Container>

        <QuickOrderForm
          user={this.props.user}
          medicine={this.state}
          handleOpen={this.handleOpen}
          setOrderDetails={this.setOrderDetails}
        />
      </div>
    );
  }
}
