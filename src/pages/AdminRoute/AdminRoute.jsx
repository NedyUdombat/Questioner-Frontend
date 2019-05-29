import PropTypes from 'prop-types';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { getToken, isAdmin } from '../../api/helpers';

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      getToken() && isAdmin() ? (
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

export default AdminRoute;

AdminRoute.propTypes = {
  component: PropTypes.any,
  location: PropTypes.any,
};
