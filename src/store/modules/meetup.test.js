import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { http } from '../../api/client';

import {
  GET_UPCOMING_MEETUPS_ERROR,
  GET_UPCOMING_MEETUPS_SUCCESS,
  GET_ALL_MEETUPS_ERROR,
  GET_ALL_MEETUPS_SUCCESS,
  CREATE_MEETUP_PROCESS,
  CREATE_MEETUP_SUCCESS,
  CREATE_MEETUP_ERROR,
  DEFAULT_STATE,
  getUpcomingMeetupsError,
  getUpcomingMeetupsSuccess,
  getUpcomingMeetups,
  getAllMeetupsError,
  getAllMeetupsSuccess,
  getAllMeetups,
  createMeetupProcess,
  createMeetupSuccess,
  createMeetupError,
  createMeetup,
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

  it('should create an action to get all meetups', () => {
    const expectedAction = {
      type: GET_ALL_MEETUPS_SUCCESS,
      meetups: [],
    };
    expect(getAllMeetupsSuccess(meetups)).toEqual(expectedAction);
  });

  it('should create an error action if it fails to get all meetups', () => {
    const error = '';
    const expectedAction = {
      type: GET_ALL_MEETUPS_ERROR,
      error,
    };
    expect(getAllMeetupsError(error)).toEqual(expectedAction);
  });

  it('should create an action for create meetup process', () => {
    const expectedAction = {
      type: CREATE_MEETUP_PROCESS,
    };
    expect(createMeetupProcess()).toEqual(expectedAction);
  });

  it('should create an action to create meetup', () => {
    const expectedAction = {
      type: CREATE_MEETUP_SUCCESS,
      meetups: [],
    };
    expect(createMeetupSuccess(meetups)).toEqual(expectedAction);
  });

  it('should create an error action if it fails to create meetup', () => {
    const error = '';
    const expectedAction = {
      type: CREATE_MEETUP_ERROR,
      error,
    };
    expect(createMeetupError(error)).toEqual(expectedAction);
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

  it('should return the meetups', () => {
    const action = getAllMeetupsSuccess(meetups);
    const state = meetupReducer(DEFAULT_STATE, action);
    expect(state.meetup).toEqual(action.meetup);
  });

  it('should return an error if any on getting a upcoming meetups', () => {
    const action = getAllMeetupsError('');
    const state = meetupReducer(DEFAULT_STATE, action);
    expect(state.error).toEqual(action.error);
  });
  it('should return the meetups process', () => {
    const action = createMeetupProcess();
    const state = meetupReducer(DEFAULT_STATE, action);
    expect(state.isLoading).toEqual(true);
  });

  it('should return the meetup', () => {
    const action = createMeetupSuccess(meetups);
    const state = meetupReducer(DEFAULT_STATE, action);
    expect(state.isLoading).toEqual(false);
    expect(state.meetups).toEqual(action.meetups);
  });

  it('should return an error if any on creating meetup', () => {
    const action = createMeetupError('');
    const state = meetupReducer(DEFAULT_STATE, action);
    expect(state.error).toEqual(action.error);
    expect(state.isLoading).toEqual(false);
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

  it('should dispatch a successful get all action', () => {
    const data = {
      status: '',
      message: '',
      data: [],
    };
    http.get = jest.fn().mockReturnValue(Promise.resolve({ data: data }));
    const expectedActions = [
      {
        type: 'GET_ALL_MEETUPS_SUCCESS',
        meetups: [],
      },
    ];
    const store = mockStore(DEFAULT_STATE);
    return store.dispatch(getAllMeetups()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch an error get all action ', () => {
    const data = {
      status: '',
      message: '',
    };
    http.get = jest.fn().mockReturnValue(Promise.reject({ data: data }));
    const expectedActions = [
      {
        type: 'GET_ALL_MEETUPS_ERROR',
        error: {
          data: {
            status: '',
            message: '',
          },
        },
      },
    ];
    const store = mockStore(DEFAULT_STATE);
    return store.dispatch(getAllMeetups()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch a successful get create meetup action', () => {
    const data = {
      status: '',
      message: '',
      data: {},
    };

    const meetup = {};
    const allMeetups = [{}, {}];
    http.post = jest.fn().mockReturnValue(Promise.resolve({ data: data }));
    const expectedActions = [
      {
        type: 'CREATE_MEETUP_PROCESS',
      },
      {
        type: 'CREATE_MEETUP_SUCCESS',
        meetups: [{}, {}, data.data],
      },
    ];
    const store = mockStore(DEFAULT_STATE);
    return store.dispatch(createMeetup(meetup, allMeetups)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch an error create meetup action ', () => {
    const response = {
      data: {
        status: '',
        message: 'An error occurred',
      },
    };
    http.post = jest.fn().mockReturnValue(Promise.reject({ response }));
    const expectedActions = [
      {
        type: 'CREATE_MEETUP_PROCESS',
      },
      {
        type: 'CREATE_MEETUP_ERROR',
        error: response.data,
      },
    ];
    const store = mockStore(DEFAULT_STATE);
    return store.dispatch(createMeetup()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
