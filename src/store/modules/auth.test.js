import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { http } from '../../api/client';

import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  DEFAULT_STATE,
  registrationInitialized,
  registrationSuccess,
  registrationError,
  register,
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

  it('should create an error action if it fails to get upcoming meetups', () => {
    const error = '';
    const expectedAction = {
      type: REGISTER_ERROR,
      error,
    };
    expect(registrationError(error)).toEqual(expectedAction);
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
});

describe('dispatch requests', () => {
  it('should dispatch a successful registration action', () => {
    const data = {
      status: '',
      message: '',
      data: {
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
      status: '',
      message: '',
      error: undefined,
    };
    http.post = jest.fn().mockReturnValue(Promise.reject({ data: data }));
    const expectedActions = [
      {
        type: 'REGISTER_REQUEST',
      },
      {
        type: 'REGISTER_ERROR',
        error: undefined,
      },
    ];
    const store = mockStore(DEFAULT_STATE);
    return store.dispatch(register()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
