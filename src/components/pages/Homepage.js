import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        Welcome, this is a home page.
        {this.props.user ? (
          <>Hi {this.props.user.name}, how are you?</>
        ) : (
          <div>
            Use the nav bar to discover more. If you can't click anything its
            probably because you're not signed in. You can do so by using the
            links below
            <Link to={"/sign-in"}>Sign In</Link>, or{" "}
            <Link to={"/sign-up"}>Sign Up</Link>
          </div>
        )}
      </div>
    );
  }
}
