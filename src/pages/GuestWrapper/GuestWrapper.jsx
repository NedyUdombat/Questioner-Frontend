import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getEncodedUser } from '../../api/helpers';

const GuestWrapper = ({ component: Component, ...rest }) => {
  const userObject = getEncodedUser();
  return (
    <Route
      {...rest}
      render={props =>
        userObject == null ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: `/` }} />
        )
      }
    />
  );
};

GuestWrapper.propTypes = {
  component: PropTypes.any.isRequired,
  location: PropTypes.object,
};

export default connect(
  null,
  {},
)(GuestWrapper);
