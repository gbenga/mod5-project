import React, { Component } from "react";
import AuthAPI from "../../AuthAPI";
import { Form, FormField, TextInput, Box, Button } from "grommet";

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
      <Box align="center" pad="medium">
        <Form onSubmit={this.handleSubmit}>
          <FormField label="Username" htmlFor="text-input">
            <TextInput
              placeholder="Enter a username"
              name="username"
              onChange={this.handleChange}
            />
          </FormField>
          <FormField label="Password" htmlFor="text-input">
            <TextInput
              type="password"
              placeholder="Enter a password"
              name="password"
              onChange={this.handleChange}
            />
          </FormField>
          <Button label="Sign In" type="submit" primary color="accent-1" />
        </Form>
      </Box>
    );
  }
}
