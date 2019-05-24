import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loader, Dimmer } from 'semantic-ui-react';

// actions
import { register } from '../../../store/modules/auth';

// components
import Input from '../../presentational/Input/Input';
import Button from '../../presentational/Button/Button';

// styles
import './Register.scss';

export class Register extends React.Component {
  state = {
    userData: {
      email: '',
      password: '',
      username: '',
      firstname: '',
      lastname: '',
      phonenumber: '',
      othername: '',
      confirmpassword: '',
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
    this.props.register({
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
          Register
        </p>
        <div className="register-card">
          <form onSubmit={this.submitHandler}>
            {isLoading && (
              <Dimmer active>
                <Loader size="large">Loading</Loader>
              </Dimmer>
            )}
            <div className="form-group">
              <div className="input-div d-flex justify-content-center">
                <Input
                  onChange={this.userInputHandler}
                  className="form-control-input"
                  value={this.state.userData.firstname}
                  placeholder="First Name"
                  name="firstname"
                  type="text"
                />
              </div>
              <div className="input-div d-flex justify-content-center">
                <Input
                  onChange={this.userInputHandler}
                  className="form-control-input"
                  value={this.state.userData.lastname}
                  placeholder="Last Name"
                  name="lastname"
                  type="text"
                />
              </div>
              <div className="input-div d-flex justify-content-center">
                <Input
                  onChange={this.userInputHandler}
                  className="form-control-input"
                  value={this.state.userData.othername}
                  placeholder="Other Name"
                  name="othername"
                  type="text"
                />
              </div>
              <div className="input-div d-flex justify-content-center">
                <Input
                  onChange={this.userInputHandler}
                  className="form-control-input"
                  value={this.state.userData.username}
                  placeholder="Username"
                  name="username"
                  type="text"
                  required="required"
                />
              </div>
              <div className="input-div d-flex justify-content-center">
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
                  value={this.state.userData.phonenumber}
                  placeholder="Phone Number"
                  name="phonenumber"
                  type="tel"
                  pattern="{+0-9}[13]"
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
              <div className="input-div d-flex justify-content-center">
                <Input
                  onChange={this.userInputHandler}
                  className="form-control-input"
                  value={this.state.userData.confirmpassword}
                  placeholder="Confirm Password"
                  name="confirmpassword"
                  type="password"
                  required="required"
                />
              </div>
            </div>
            <div
              style={{
                marginTop: '.9235rem',
              }}
            >
              <Button type="submit" value="GET STARTED" className="btn-dark" />
            </div>
            <p
              className="f-20 text-grey text-center"
              style={{
                marginTop: '.9235rem',
              }}
            >
              Already have an account? Log in{' '}
              <Link to="/" className="text-blue">
                here
              </Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  register: PropTypes.func,
  isLoading: PropTypes.bool,
};

export const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
});

export default connect(
  mapStateToProps,
  { register },
)(Register);
