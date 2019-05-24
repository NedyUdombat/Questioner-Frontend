import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// styles
import './Navbar.scss';
import '../Button/Button.scss';

const Navbar = ({ className }) => {
  return (
    <div>
      <div className={`nav ${className}`}>
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <Link to="/" className="nav-title">
            Questioner
          </Link>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <Icon name="bars" color="grey" size="big" />
          </label>
        </div>

        <div className="nav-links">
          <Link to="/login" className="btn btn-transparent">
            MEETUPS
          </Link>
          <Link to="/login" className="btn btn-dark-alt">
            LOGIN
          </Link>
          <Link to="/register" className="btn btn-white-alt-hover">
            REGISTER
          </Link>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
