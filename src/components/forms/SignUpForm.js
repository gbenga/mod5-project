import React, { Component } from "react";
import API from "../../data/API";

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
        <label>These inputs will be permanent</label>
        <label>Date of birth</label>
        <br />
        <input type="text" name="dob" onChange={this.handleChange}></input>
        <br />
        <label>Sex: </label>
        <input type="text" name="sex" onChange={this.handleChange}></input>
        <br />
        <label>Username:</label>
        <input type="text" name="username" onChange={this.handleChange}></input>
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          onChange={this.handleChange}
        ></input>
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}
