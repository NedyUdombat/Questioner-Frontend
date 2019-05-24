import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { http } from '../../api/client';

import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  AUTHENTICATION_REQUEST,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_ERROR,
  DEFAULT_STATE,
  registrationInitialized,
  registrationSuccess,
  registrationError,
  authenticationInitialized,
  authenticationSuccess,
  authenticationError,
  register,
  authenticate,
  authReducer,
} from './auth';

const mockStore = configureMockStore([thunk]);

describe('actions', () => {
  it('should create an action to for register request', () => {
    const expectedAction = {
      type: REGISTER_REQUEST,
    };
    expect(registrationInitialized()).toEqual(expectedAction);
  });

  it('should create an action to upon successful regristration', () => {
    const expectedAction = {
      type: REGISTER_SUCCESS,
    };
    expect(registrationSuccess()).toEqual(expectedAction);
  });

  it('should create an error action if registration fails', () => {
    const error = '';
    const expectedAction = {
      type: REGISTER_ERROR,
      error,
    };
    expect(registrationError(error)).toEqual(expectedAction);
  });

  it('should create an action to for authentication request', () => {
    const expectedAction = {
      type: AUTHENTICATION_REQUEST,
    };
    expect(authenticationInitialized()).toEqual(expectedAction);
  });

  it('should create an action to upon successful authentication', () => {
    const expectedAction = {
      type: AUTHENTICATION_SUCCESS,
    };
    expect(authenticationSuccess()).toEqual(expectedAction);
  });

  it('should create an error action if authentication fails', () => {
    const error = '';
    const expectedAction = {
      type: AUTHENTICATION_ERROR,
      error,
    };
    expect(authenticationError(error)).toEqual(expectedAction);
  });
});

describe('reducers', () => {
  it('should return the default state ', () => {
    const state = authReducer(DEFAULT_STATE, {
      type: undefined,
    });
    expect(state).toEqual(DEFAULT_STATE);
  });

  it('should return the registration process', () => {
    const action = registrationInitialized();
    const state = authReducer(DEFAULT_STATE, action);
    expect(state.isLoading).toEqual(true);
  });

  it('should return registration success', () => {
    const action = registrationSuccess();
    const state = authReducer(DEFAULT_STATE, action);
    expect(state.isLoading).toEqual(false);
  });

  it('should return an error if any on registration', () => {
    const action = registrationError({});
    const state = authReducer(DEFAULT_STATE, action);
    expect(state.error).toEqual(action.error);
    expect(state.isLoading).toEqual(false);
  });

  it('should return the authentication process', () => {
    const action = authenticationInitialized();
    const state = authReducer(DEFAULT_STATE, action);
    expect(state.isLoading).toEqual(true);
  });

  it('should return authentication success', () => {
    const action = authenticationSuccess();
    const state = authReducer(DEFAULT_STATE, action);
    expect(state.isLoading).toEqual(false);
  });

  it('should return an error if any on authentication', () => {
    const action = authenticationError({});
    const state = authReducer(DEFAULT_STATE, action);
    expect(state.error).toEqual(action.error);
    expect(state.isLoading).toEqual(false);
  });
});

describe('dispatch requests', () => {
  it('should dispatch a successful registration action', () => {
    const data = {
      status: '',
      message: '',
      data: {
        username: 'username',
        token: 'q2345tgbnfjcv8ujed9cquwefnacbuiweodcjiwneif9cjinuwe',
      },
    };
    http.post = jest.fn().mockReturnValue(Promise.resolve({ data: data }));
    const expectedActions = [
      {
        type: 'REGISTER_REQUEST',
      },
      {
        type: 'REGISTER_SUCCESS',
      },
    ];
    const store = mockStore(DEFAULT_STATE);
    return store.dispatch(register()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch an error action when registration fails', () => {
    const data = {
      data: {
        status: '',
        message: 'An error occurred',
      },
    };
    http.post = jest.fn().mockReturnValue(Promise.reject({ response: data }));
    const expectedActions = [
      {
        type: 'REGISTER_REQUEST',
      },
      {
        type: 'REGISTER_ERROR',
        error: data.data,
      },
    ];
    const store = mockStore(DEFAULT_STATE);
    return store.dispatch(register()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch a successful authentication action', () => {
    const data = {
      status: '',
      message: '',
      jwToken: 'q2345tgbnfjcv8ujed9cquwefnacbuiweodcjiwneif9cjinuwe',
      authDetail: {
        username: 'username',
        email: 'username@quest.com',
        role: 'user',
      },
    };
    http.post = jest.fn().mockReturnValue(Promise.resolve({ data: data }));
    const expectedActions = [
      {
        type: 'AUTHENTICATION_REQUEST',
      },
      {
        type: 'AUTHENTICATION_SUCCESS',
      },
    ];
    const store = mockStore(DEFAULT_STATE);
    return store.dispatch(authenticate()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch an error action when authentication fails', () => {
    const data = {
      data: {
        status: '',
        message: 'an error occurred',
      },
    };
    http.post = jest.fn().mockReturnValue(Promise.reject({ response: data }));
    const expectedActions = [
      {
        type: 'AUTHENTICATION_REQUEST',
      },
      {
        type: 'AUTHENTICATION_ERROR',
        error: data.data,
      },
    ];
    const store = mockStore(DEFAULT_STATE);
    return store.dispatch(authenticate()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
