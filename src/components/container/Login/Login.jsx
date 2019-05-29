import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loader, Dimmer } from 'semantic-ui-react';

// actions
import { authenticate } from '../../../store/modules/auth';

// components
import Input from '../../presentational/Input/Input';
import Button from '../../presentational/Button/Button';

export class Login extends React.Component {
  state = {
    userData: {
      email: '',
      password: '',
    },
  };

  userInputHandler = event => {
    this.setState({
      userData: {
        ...this.state.userData,
        [event.target.name]: event.target.value,
      },
    });
  };

  submitHandler = async event => {
    event.preventDefault();
    const { userData } = this.state;
    this.props.authenticate({
      ...userData,
    });

    this.setState({
      userData: {
        ...userData,
        password: '',
      },
    });
  };

  render() {
    const { isLoading } = this.props;
    return (
      <div>
        <p
          className="f-50 text-center font-title"
          style={{
            marginBottom: '0.625rem',
          }}
        >
          Login
        </p>
        <div className="auth-card">
          <form onSubmit={this.submitHandler} autoComplete="on">
            {isLoading && (
              <Dimmer active>
                <Loader size="large">Loading</Loader>
              </Dimmer>
            )}
            <div
              className="form-group"
              style={{
                display: 'block',
              }}
            >
              <div
                className="input-div d-flex justify-content-center"
                style={{
                  marginBottom: '1rem',
                }}
              >
                <Input
                  onChange={this.userInputHandler}
                  className="form-control-input"
                  value={this.state.userData.email}
                  placeholder="Email"
                  name="email"
                  type="email"
                  required="required"
                />
              </div>
              <div className="input-div d-flex justify-content-center">
                <Input
                  onChange={this.userInputHandler}
                  className="form-control-input"
                  value={this.state.userData.password}
                  placeholder="Password"
                  name="password"
                  type="password"
                  pattern="(?=.*[a-z]).{6,}"
                  title="Must be 6 characters or more and contain at least lowercase letter"
                  required="required"
                />
              </div>
            </div>
            <div
              style={{
                marginTop: '.9235rem',
              }}
            >
              <Button type="submit" value="WELCOME BACK" className="btn-dark" />
            </div>
            <p
              className="f-20 text-grey text-center"
              style={{
                marginTop: '.9235rem',
              }}
            >
              Don&apos;t have an account? Register{' '}
              <Link to="/register" className="text-blue">
                here
              </Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  authenticate: PropTypes.func,
  isLoading: PropTypes.bool,
};

export const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
});

export default connect(
  mapStateToProps,
  { authenticate },
)(Login);
