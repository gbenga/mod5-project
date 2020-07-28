import React, { Component } from "react";
import API from "../../data/API";
import {
  Button,
  Form,
  Grid,
  Icon,
  Label,
  Header,
  Segment,
} from "semantic-ui-react";

export default class NewOrderForm extends Component {
  state = {
    delivery_date: "",
    no_contact: "",
  };

  componentDidMount() {
    this.setState({
      user_id: this.props.user.id,
    });
  }

  handleChange = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    API.postToOrders({ order: this.state })
      .then((order) =>
        API.postToOrderMedicines({
          order_medicine: {
            order_id: order.id,
            medicine_id: this.props.medicine.id,
          },
        })
      )
      .then((order) => this.props.setOrderDetails(order))
      .then(this.props.handleOpen());
  };
  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            Place a new Order
          </Header>
          <Form size="large" onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Field>
                <label>Medicine</label>
                <Form.Input
                  type="text"
                  value={this.props.medicine.name}
                  readOnly={true}
                ></Form.Input>
              </Form.Field>
              <Form.Field>
                <label>User</label>
                <Form.Input
                  type="text"
                  value={this.props.user.first_name}
                  readOnly={true}
                ></Form.Input>
              </Form.Field>
              <Form.Field>
                <label>No contact?</label>
                <input type="checkbox" name="no_contact"></input>
              </Form.Field>
              <Label>
                Please select if you would prefer a no contact delivery
              </Label>
              <Form.Field>
                <label>Delivery Date</label>
                <Form.Input
                  name="delivery_date"
                  type="date"
                  onChange={this.handleChange}
                ></Form.Input>
              </Form.Field>
              <Button type="submit" animated>
                <Button.Content visible>Submit</Button.Content>
                <Button.Content hidden>
                  <Icon name="check square outline" />
                </Button.Content>
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}
