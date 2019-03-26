import React from "react";
import { Route } from "react-router-dom";

const ProtectedRoute = ({ auth, path, component: C, ...rest }) => (
  <Route
    path={path}
    render={rest =>
      auth.isAuthenticated() ? <C auth={auth} rest /> : auth.login()
    }
  />
);

export default ProtectedRoute;
