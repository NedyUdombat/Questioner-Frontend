import PropTypes from 'prop-types';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { getToken } from '../../api/helpers';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      getToken() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: {
              from: props.location,
            },
          }}
        />
      )
    }
  />
);

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  component: PropTypes.any,
  location: PropTypes.any,
};
