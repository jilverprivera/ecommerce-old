import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router";

export const AdminRoute = ({ isAdmin, component: Component, ...rest }) => {
  localStorage.setItem("lastPath", rest.location.pathname);
  return (
    <Route
      {...rest}
      component={(props) =>
        isAdmin ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

AdminRoute.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
