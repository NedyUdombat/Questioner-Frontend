import swal from '@sweetalert/with-react';

import { registrationRequest } from '../../api/auth';
import { setToken } from '../../api/helpers';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

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

export const register = userData => async dispatch => {
  try {
    dispatch(registrationInitialized());
    const { data } = await registrationRequest(userData);
    setToken(data.data.jwToken);
    dispatch(registrationSuccess());
    swal({
      title: 'Welcome!',
      text: 'Your account has been created',
      icon: 'success',
      button: 'CONTINUE',
    });
  } catch (error) {
    swal({
      title: 'Error!',
      icon: 'error',
      button: 'RETRY',
    });
    dispatch(registrationError(error.response));
  }
};

export const DEFAULT_STATE = {
  error: {},
  isLoading: false,
};

export const authReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case REGISTER_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
};
