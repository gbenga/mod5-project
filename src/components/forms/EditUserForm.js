import React, { Component } from "react";
import API from "../../data/API";

export default class EditUserForm extends Component {
  state = {
    first_name: "",
    last_name: "",
    phone: "",
    address: "",
    allergies: "",
  };
  componentDidMount() {
    API.fetchUser(this.props.userId).then((userObj) =>
      this.setState({
        first_name: userObj.first_name,
        last_name: userObj.last_name,
        phone: userObj.phone,
        address: userObj.address,
        allergies: userObj.allergies,
      })
    );
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    API.patchToUser(this.state, this.props.userId).then(console.log);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          name="first_name"
          onChange={this.handleChange}
        ></input>
        <br />
        <label>Last Name:</label>
        <input
          type="text"
          name="last_name"
          onChange={this.handleChange}
        ></input>
        <br />
        <label>Phone number:</label>
        <input type="text" name="phone" onChange={this.handleChange}></input>
        <br />
        <label>Address:</label>
        <input type="text" name="address" onChange={this.handleChange}></input>
        <br />
        <label>Allergies:</label>
        <input
          type="text"
          name="allergies"
          onChange={this.handleChange}
        ></input>
        <br />
        <button type="submit">Submit new user details</button>
      </form>
    );
  }
}
