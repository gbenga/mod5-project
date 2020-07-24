import React, { Component } from "react";
import AuthAPI from "../../AuthAPI";

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
    console.log(this.state);
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
      <form onSubmit={this.handleSubmit}>
        <label>Username:</label>
        <input type="text" name="username" onChange={this.handleChange}></input>
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          onChange={this.handleChange}
        ></input>

        <button type="submit">Sign in</button>
      </form>
    );
  }
}
