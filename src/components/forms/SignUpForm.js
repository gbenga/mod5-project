import React, { Component } from "react";
import API from "../../data/API";
import { Form, FormField, TextInput, Box, Button } from "grommet";

export default class SignUpForm extends Component {
  state = {
    first_name: "",
    last_name: "",
    phone: "",
    address: "",
    allergies: "",
    dob: "",
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
          ? resp.errors.map((err) => console.log(err)) &&
            alert("check console for errors")
          : this.props.successfulSignUp()
      )
      .then((order) => alert(JSON.stringify(order)));
  };
  render() {
    return (
      <Box align="center" pad="large">
        <Form onSubmit={this.handleSubmit}>
          <FormField label="First Name" htmlFor="text-input">
            <TextInput
              placeholder="Please enter your first name"
              type="text"
              name="first_name"
              onChange={this.handleChange}
            />
          </FormField>
          <FormField label="Last Name" htmlFor="text-input">
            <TextInput
              placeholder="Please enter your last name"
              type="text"
              name="last_name"
              onChange={this.handleChange}
            />
          </FormField>
          <FormField label="Phone number" htmlFor="text-input">
            <TextInput
              placeholder="Please enter your phone number"
              type="text"
              name="phone"
              onChange={this.handleChange}
            />
          </FormField>
          <FormField label="Address" htmlFor="text-input">
            <TextInput
              placeholder="Please enter your address"
              type="text-area"
              name="address"
              onChange={this.handleChange}
            />
          </FormField>
          <FormField label="Allergies" htmlFor="text-input">
            <TextInput
              placeholder="Please enter any allergies you have"
              type="text-area"
              name="allergies"
              onChange={this.handleChange}
            />
          </FormField>
          <label>The following fields will be permanent</label>
          <FormField label="Date of Birth" htmlFor="text-input">
            <TextInput
              placeholder="Please enter your Date of Birth"
              type="text"
              name="dob"
              onChange={this.handleChange}
            />
          </FormField>
          <FormField label="Sex" htmlFor="text-input">
            <TextInput
              placeholder="Please enter your sex"
              type="text"
              name="sex"
              onChange={this.handleChange}
            />
          </FormField>
          <FormField label="Username" htmlFor="text-input">
            <TextInput
              placeholder="Please enter your username"
              type="text"
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
          <Button
            label="Submit Details"
            type="submit"
            primary
            color="accent-1"
          />
        </Form>
      </Box>
    );
  }
}
