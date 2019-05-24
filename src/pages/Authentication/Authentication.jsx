import React from 'react';
import PropTypes from 'prop-types';

// components
import Navbar from '../../components/presentational/Navbar/Navbar';
import Image from '../../components/presentational/Image/Image';
import Register from '../../components/container/Register/Register';

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
          {match.path === '/register' ? <Register /> : <p>This is for Login</p>}
        </div>
      </div>
    </div>
  );
};

Authentication.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }),
};

export default Authentication;
