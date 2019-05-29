import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// styles
import './Navbar.scss';
import '../Button/Button.scss';

// actions
import { logout } from '../../../store/modules/auth';
import { getEncodedUser, getToken } from '../../../api/helpers';
// import Button from '../Button/Button';

export class Navbar extends React.Component {
  // logOut = event => {
  //   event.preventDefault();
  //   this.props.logout();
  // };

  username = getEncodedUser();

  render() {
    const { className } = this.props;
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
            <Link to="/meetups" className="btn btn-transparent">
              MEETUPS
            </Link>
            {!getToken() ? (
              <Fragment>
                <Link to="/login" className="btn btn-dark-alt">
                  LOGIN
                </Link>
                <Link to="/register" className="btn btn-white-alt-hover">
                  REGISTER
                </Link>
              </Fragment>
            ) : (
              <Fragment>
                <Link to="/" className="btn btn-transparent">
                  {this.username === null ? '' : `@${this.username.username}`}
                </Link>
                {/*<Button*/}
                {/*  className="btn-dark logout"*/}
                {/*  value="LOGOUT"*/}
                {/*  onClick={() => this.logOut()}*/}
                {/*/>*/}
              </Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  className: PropTypes.string,
  logout: PropTypes.func,
  user: PropTypes.object,
  getEncodedUser: PropTypes.func,
};

export default connect(
  null,
  { logout },
)(Navbar);
