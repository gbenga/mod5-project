import React, { Component } from "react";
import NewOrderForm from "../forms/NewOrderForm";
import API from "../../data/API";

export default class NewOrderPage extends Component {
  state = {
    stocks: [],
  };

  componentDidMount() {
    API.fetchStocks().then((stocks) => this.setState({ stocks: stocks }));
  }
  render() {
    return (
      <div>
        <NewOrderForm user={this.props.user} stocks={this.state.stocks} />
      </div>
    );
  }
}
