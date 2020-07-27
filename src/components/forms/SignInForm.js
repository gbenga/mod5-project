import React, { Component } from "react";
import AuthAPI from "../../AuthAPI";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";

export default class SignInForm extends Component {
  state = {
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
    AuthAPI.signIn(this.state).then((json) =>
      this.props.signIn(json.user, json.token)
    );
    this.setState({
      username: "",
      password: "",
    });
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
            Log-in to your account
          </Header>
          <Form size="large" onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Input
                name="username"
                onChange={this.handleChange}
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Enter your Username"
              />
              <Form.Input
                name="password"
                onChange={this.handleChange}
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Enter your Password"
                type="password"
              />

              <Button type="submit" color="teal" fluid size="large">
                Sign In
              </Button>
            </Segment>
          </Form>
          <Message>
            Are you new here? <a href="/sign-up">Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}
