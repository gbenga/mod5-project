import React, { Component } from "react";
import API from "../../data/API";

export default class EditUserForm extends Component {
  state = {
    first_name: this.props.user.first_name,
    last_name: this.props.user.last_name,
    phone: this.props.user.phone,
    address: this.props.user.address,
    allergies: this.props.user.allergies,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    API.patchToUser(this.state, this.props.user.id).then((resp) =>
      resp.errors
        ? resp.errors.map((err) => console.log(err)) &&
          alert("check console for errors")
        : console.log("success")
    );
    this.setState({
      first_name: "",
      last_name: "",
      phone: "",
      address: "",
      allergies: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          name="first_name"
          value={this.state.first_name}
          onChange={this.handleChange}
        ></input>
        <br />
        <label>Last Name:</label>
        <input
          type="text"
          name="last_name"
          value={this.state.last_name}
          onChange={this.handleChange}
        ></input>
        <br />
        <label>Phone number:</label>
        <input
          type="text"
          name="phone"
          value={this.state.phone}
          onChange={this.handleChange}
        ></input>
        <br />
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={this.state.address}
          onChange={this.handleChange}
        ></input>
        <br />
        <label>Allergies:</label>
        <input
          type="text"
          name="allergies"
          value={this.state.allergies}
          onChange={this.handleChange}
        ></input>
        <br />
        <button type="submit">Submit new user details</button>
      </form>
    );
  }
}
