import React, { Component } from "react";
import NewOrderForm from "../forms/NewOrderForm";
import API from "../../data/API";
import { Dimmer, Header, Icon, Container } from "semantic-ui-react";

export default class NewOrderPage extends Component {
  state = {
    stocks: [],
    active: false,
    newOrder: {
      delivery_date: "",
      no_contact: "",
      stocksToBeOrdered: [],
    },
  };

  componentDidMount() {
    API.fetchStocks().then((stocks) => this.setState({ stocks: stocks }));
  }

  handleOpen = () => {
    this.setState({ active: true });
  };
  handleClose = () => this.setState({ active: false });
  setOrderDetails = (order) => {
    this.setState({ newOrder: order });
  };

  readOrderDetails = () => {
    return (
      <Header.Subheader>
        Your order is on the way. You can view it on your profile{" "}
        <a href={"/profile"}>Here</a>
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
        <NewOrderForm
          user={this.props.user}
          stocks={this.state.stocks}
          handleOpen={this.handleOpen}
          setOrderDetails={this.setOrderDetails}
        />
      </div>
    );
  }
}
