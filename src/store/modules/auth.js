import swal from '@sweetalert/with-react';

import { registrationRequest, authenticationRequest } from '../../api/auth';
import { setToken } from '../../api/helpers';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const AUTHENTICATION_REQUEST = 'AUTHENTICATION_REQUEST';
export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';

export const registrationInitialized = () => ({
  type: REGISTER_REQUEST,
});

export const registrationSuccess = () => ({
  type: REGISTER_SUCCESS,
});

export const registrationError = error => ({
  type: REGISTER_ERROR,
  error,
});

export const authenticationInitialized = () => ({
  type: AUTHENTICATION_REQUEST,
});

export const authenticationSuccess = () => ({
  type: AUTHENTICATION_SUCCESS,
});

export const authenticationError = error => ({
  type: AUTHENTICATION_ERROR,
  error,
});

export const register = userData => async dispatch => {
  try {
    dispatch(registrationInitialized());
    const { data } = await registrationRequest(userData);
    setToken(data.data.jwToken);
    dispatch(registrationSuccess());
    swal({
      title: 'Welcome!',
      text: `Hi ${data.data.username} Your account has been created`,
      icon: 'success',
      button: 'CONTINUE',
    });
  } catch (error) {
    swal({
      title: 'Error!',
      icon: 'error',
      text: `${error.response.data.message}`,
      button: 'RETRY',
    });
    dispatch(registrationError(error.response.data));
  }
};

export const authenticate = userData => async dispatch => {
  try {
    dispatch(authenticationInitialized());
    const { data } = await authenticationRequest(userData);
    setToken(data.jwToken);
    dispatch(authenticationSuccess());
    swal({
      title: `Welcome Back! ${data.authDetail.username}`,
      icon: 'success',
      button: 'CONTINUE',
    });
  } catch (error) {
    swal({
      title: 'Ooops!!',
      icon: 'error',
      text: `${error.response.data.message}`,
      button: 'RETRY',
    });
    dispatch(authenticationError(error.response.data));
  }
};

export const DEFAULT_STATE = {
  error: {},
  isLoading: false,
};

export const authReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    case AUTHENTICATION_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_SUCCESS:
    case AUTHENTICATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case REGISTER_ERROR:
    case AUTHENTICATION_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
};
