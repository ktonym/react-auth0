import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";
import Auth from "./auth/Auth";
import Callback from "./Callback";
import Profile from "./Profile";

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }
  render() {
    return (
      <>
        <Nav auth={this.auth} />
        <div className="body">
          <Route
            path="/"
            exact
            render={props => <Home auth={this.auth} {...props} />}
          />
          <Route
            path="/callback"
            render={props => <Callback auth={this.auth} {...props} />}
          />
          <Route
            path="/profile"
            render={props =>
              this.auth.isAuthenticated() ? (
                <Profile auth={this.auth} {...props} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
        </div>
      </>
    );
  }
}

export default App;
