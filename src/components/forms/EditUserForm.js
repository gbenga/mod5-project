import React, { Component } from "react";
import API from "../../data/API";
import { Button, Form, Grid } from "semantic-ui-react";

export default class EditUserForm extends Component {
  state = {
    first_name: this.props.user.first_name,
    last_name: this.props.user.last_name,
    phone: this.props.user.phone,
    address: this.props.user.address,
    allergies: this.props.user.allergies,
    dob: this.props.user.dob,
    username: this.props.user.username,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    API.patchToUser(this.state, this.props.user.id)
      .then((resp) =>
        resp.errors
          ? resp.errors.map((err) => console.log(err)) &&
            alert("check console for errors")
          : console.log("success")
      )
      .then(
        this.setState({
          first_name: "",
          last_name: "",
          phone: "",
          address: "",
          allergies: "",
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
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>First Name:</label>
              <input
                type="text"
                name="first_name"
                value={this.state.first_name}
                onChange={this.handleChange}
              ></input>
            </Form.Field>
            <Form.Field>
              <label>Last Name:</label>
              <input
                type="text"
                name="last_name"
                value={this.state.last_name}
                onChange={this.handleChange}
              ></input>
            </Form.Field>
            <Form.Field>
              <label>Phone number:</label>
              <input
                type="text"
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
              ></input>
            </Form.Field>
            <Form.Field>
              <label>Allergies:</label>
              <input
                type="text"
                name="allergies"
                value={this.state.allergies}
                onChange={this.handleChange}
              ></input>
            </Form.Field>
            <Form.Field>
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={this.state.address}
                onChange={this.handleChange}
              ></input>
            </Form.Field>
            <Button type="submit">Submit User details</Button>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}
