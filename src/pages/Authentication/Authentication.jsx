import React from 'react';
import PropTypes from 'prop-types';

// components
import Navbar from '../../components/presentational/Navbar/Navbar';
import Image from '../../components/presentational/Image/Image';
import Register from '../../components/container/Register/Register';
import Login from '../../components/container/Login/Login';

// styles
import './Authentication.scss';

const Authentication = ({ match }) => {
  return (
    <div>
      <Navbar className="nav-dark" />
      <div className="auth">
        <div className="left">
          <Image
            src="https://res.cloudinary.com/nedy123/image/upload/v1558220743/demo/auth-illustration.svg"
            className="wh-100"
            alt="Authentication Illustration"
          />
        </div>
        <div className="right">
          {match.path === '/register' ? (
            <Register {...location} />
          ) : (
            <Login {...location} />
          )}
        </div>
      </div>
    </div>
  );
};

Authentication.propTypes = {
  props: PropTypes.shape({
    match: PropTypes.shape({
      path: PropTypes.string,
    }),
    location: PropTypes.object,
  }),
  match: PropTypes.object,
  location: PropTypes.object,
};

export default Authentication;
