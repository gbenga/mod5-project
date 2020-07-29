import React, { Component } from "react";
import API from "../../data/API";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Label,
} from "semantic-ui-react";

export default class SignUpForm extends Component {
  state = {
    first_name: "",
    last_name: "",
    phone: "",
    address: "",
    allergies: "",
    dob: "",
    sex: "",
    username: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    API.postToUsers(this.state)
      .then((resp) =>
        resp.errors
          ? // Needs error handling
            resp.errors.map((err) => alert(JSON.stringify(err)))
          : this.props.handleOpen()
      )
      .then(
        this.setState({
          first_name: "",
          last_name: "",
          phone: "",
          address: "",
          allergies: "",
          dob: "",
          sex: "",
          username: "",
          password: "",
        })
      );
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
            Create a new account
          </Header>
          <Form size="medium" onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Input
                name="first_name"
                onChange={this.handleChange}
                value={this.state.first_name}
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Enter your First Name"
              />
              <Form.Input
                name="last_name"
                onChange={this.handleChange}
                value={this.state.last_name}
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Enter your Last Name"
              />
              <Form.Input
                name="address"
                onChange={this.handleChange}
                value={this.state.address}
                fluid
                icon="map signs"
                iconPosition="left"
                placeholder="Enter your Address"
              />
              <Form.Input
                name="phone"
                onChange={this.handleChange}
                value={this.state.phone}
                fluid
                icon="phone volume"
                iconPosition="left"
                placeholder="Enter your Phone number"
              />
              <Form.Input
                name="allergies"
                onChange={this.handleChange}
                value={this.state.allergies}
                fluid
                icon="thumbs down"
                iconPosition="left"
                placeholder="Enter your Allergies"
              />
              <Form.Input>
                <Label as="a" color="orange" ribbon>
                  The following fields will be permanent
                </Label>
              </Form.Input>
              <Label as="a">Date of Birth</Label>
              <Form.Input
                name="dob"
                type="date"
                onChange={this.handleChange}
                value={this.state.dob}
                fluid
                icon="calendar alternate"
                iconPosition="left"
                placeholder="Enter your Date of Birth"
              />
              <Form.Input
                name="sex"
                onChange={this.handleChange}
                value={this.state.sex}
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Enter your Sex"
              />
              <Form.Input
                name="username"
                onChange={this.handleChange}
                value={this.state.username}
                fluid
                icon="spy"
                iconPosition="left"
                placeholder="Enter your Username"
              />
              <Form.Input
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Enter your Password"
                type="password"
              />

              <Button type="submit" color="teal" fluid size="large">
                Submit details
              </Button>
            </Segment>
          </Form>
          <Message>
            Been here before? <a href="/sign-in">Sign In</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}
