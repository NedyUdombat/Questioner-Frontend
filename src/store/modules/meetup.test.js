import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { http } from '../../api/client';

import {
  GET_UPCOMING_MEETUPS_ERROR,
  GET_UPCOMING_MEETUPS_SUCCESS,
  DEFAULT_STATE,
  getUpcomingMeetupsError,
  getUpcomingMeetupsSuccess,
  getUpcomingMeetups,
  meetupReducer,
} from './meetup';

const mockStore = configureMockStore([thunk]);

const meetups = [];

describe('actions', () => {
  it('should create an action to get upcoming meetups', () => {
    const expectedAction = {
      type: GET_UPCOMING_MEETUPS_SUCCESS,
      meetups: [],
    };
    expect(getUpcomingMeetupsSuccess(meetups)).toEqual(expectedAction);
  });

  it('should create an error action if it fails to get upcoming meetups', () => {
    const error = '';
    const expectedAction = {
      type: GET_UPCOMING_MEETUPS_ERROR,
      error,
    };
    expect(getUpcomingMeetupsError(error)).toEqual(expectedAction);
  });
});

describe('reducers', () => {
  it('should return the default state ', () => {
    const state = meetupReducer(DEFAULT_STATE, {
      type: undefined,
    });
    expect(state).toEqual(DEFAULT_STATE);
  });

  it('should return the meetups', () => {
    const action = getUpcomingMeetupsSuccess(meetups);
    const state = meetupReducer(DEFAULT_STATE, action);
    expect(state.meetup).toEqual(action.meetup);
  });

  it('should return an error if any on getting a upcoming meetups', () => {
    const action = getUpcomingMeetupsError('');
    const state = meetupReducer(DEFAULT_STATE, action);
    expect(state.error).toEqual(action.error);
  });
});

describe('dispatch requests', () => {
  it('should dispatch a successful get upcoming action', () => {
    const data = {
      status: '',
      message: '',
      data: [],
    };
    http.get = jest.fn().mockReturnValue(Promise.resolve({ data: data }));
    const expectedActions = [
      {
        type: 'GET_UPCOMING_MEETUPS_SUCCESS',
        meetups: [],
      },
    ];
    const store = mockStore(DEFAULT_STATE);
    return store.dispatch(getUpcomingMeetups()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch an error get upcoming action ', () => {
    const data = {
      status: '',
      message: '',
    };
    http.get = jest.fn().mockReturnValue(Promise.reject({ data: data }));
    const expectedActions = [
      {
        type: 'GET_UPCOMING_MEETUPS_ERROR',
        error: {
          data: {
            status: '',
            message: '',
          },
        },
      },
    ];
    const store = mockStore(DEFAULT_STATE);
    return store.dispatch(getUpcomingMeetups()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
