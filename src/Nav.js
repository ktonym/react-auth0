import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  state = {};

  render() {
    const { isAuthenticated, login, logout } = this.props.auth;
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <button onClick={isAuthenticated() ? logout : login}>
              {this.props.auth.isAuthenticated() ? "Log Out" : "Log In"}
            </button>
          </li>
          {/*<li>
            <Link to="/policies">Policies</Link>
          </li>
          <li>
            <Link to="/claims">Claims</Link>
          </li>*/}
        </ul>
      </nav>
    );
  }
}

export default Nav;
