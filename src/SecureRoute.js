import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

const SecureRoute = ({ component: C, auth, scopes, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      // 1. Redirect to login if not logged in
      if (!auth.isAuthenticated()) return auth.login();
      // 2. Display message if user lacks required scope(s)
      if (scopes.length > 0 && !auth.userHasScopes(scopes)) {
        return (
          <h1>
            Unauthorized - You need the following scope(s) to view this page:{" "}
            {scopes.join(",")}.
          </h1>
        );
      }

      // 3. Render component
      return <C auth={auth} {...props} />;
    }}
  />
);

SecureRoute.propTypes = {
  component: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  scopes: PropTypes.array
};

export default SecureRoute;
