import swal from '@sweetalert/with-react';

import {
  geUpcomingMeetupsRequest,
  getAllMeetupsRequest,
  createMeetupRequest,
} from '../../api/meetup';

// actions
export const GET_UPCOMING_MEETUPS_ERROR = 'GET_UPCOMING_MEETUPS_ERROR';
export const GET_UPCOMING_MEETUPS_SUCCESS = 'GET_UPCOMING_MEETUPS_SUCCESS';
export const GET_ALL_MEETUPS_ERROR = 'GET_ALL_MEETUPS_ERROR';
export const GET_ALL_MEETUPS_SUCCESS = 'GET_ALL_MEETUPS_SUCCESS';
export const CREATE_MEETUP_PROCESS = 'CREATE_MEETUP_PROCESS';
export const CREATE_MEETUP_SUCCESS = 'CREATE_MEETUP_SUCCESS';
export const CREATE_MEETUP_ERROR = 'CREATE_MEETUP_ERROR';
export const EDIT_MEETUP_PROCESS = 'EDIT_MEETUP_PROCESS';
export const EDIT_MEETUP_SUCCESS = 'EDIT_MEETUP_SUCCESS';
export const EDIT_MEETUP_ERROR = 'EDIT_MEETUP_ERROR';
export const DELETE_MEETUP_PROCESS = 'DELETE_MEETUP_PROCESS';
export const DELETE_MEETUP_SUCCESS = 'DELETE_MEETUP_SUCCESS';
export const DELETE_MEETUP_ERROR = 'DELETE_MEETUP_ERROR';

export const getUpcomingMeetupsError = error => ({
  type: GET_UPCOMING_MEETUPS_ERROR,
  error,
});

export const getUpcomingMeetupsSuccess = meetups => ({
  type: GET_UPCOMING_MEETUPS_SUCCESS,
  meetups,
});

export const getAllMeetupsError = error => ({
  type: GET_ALL_MEETUPS_ERROR,
  error,
});

export const getAllMeetupsSuccess = meetups => ({
  type: GET_ALL_MEETUPS_SUCCESS,
  meetups,
});

export const createMeetupProcess = () => ({
  type: CREATE_MEETUP_PROCESS,
});

export const createMeetupSuccess = meetups => ({
  type: CREATE_MEETUP_SUCCESS,
  meetups,
});

export const createMeetupError = error => ({
  type: CREATE_MEETUP_ERROR,
  error,
});

export const editMeetupProcess = () => ({
  type: EDIT_MEETUP_PROCESS,
});

export const editMeetupSuccess = meetup => ({
  type: EDIT_MEETUP_SUCCESS,
  meetup,
});

export const editMeetupError = () => ({
  type: EDIT_MEETUP_ERROR,
});

export const deleteMeetupProcess = () => ({
  type: DELETE_MEETUP_PROCESS,
});

export const deleteMeetupSuccess = meetups => ({
  type: DELETE_MEETUP_SUCCESS,
  meetups,
});

export const deleteMeetupError = () => ({
  type: DELETE_MEETUP_ERROR,
});

export const getUpcomingMeetups = () => async dispatch => {
  try {
    const { data } = await geUpcomingMeetupsRequest();
    return dispatch(getUpcomingMeetupsSuccess(data.data));
  } catch (error) {
    return dispatch(getUpcomingMeetupsError(error));
  }
};

export const getAllMeetups = () => async dispatch => {
  try {
    const { data } = await getAllMeetupsRequest();
    return dispatch(getAllMeetupsSuccess(data.data));
  } catch (error) {
    return dispatch(getAllMeetupsError(error));
  }
};

export const createMeetup = (meetup, meetups) => async dispatch => {
  try {
    dispatch(createMeetupProcess());
    const { data } = await createMeetupRequest(meetup);
    meetups.push(data.data);
    dispatch(createMeetupSuccess(meetups));
    swal({
      title: 'Success!',
      text: `Meetup created`,
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
    dispatch(createMeetupError(error.response.data));
  }
};

export const DEFAULT_STATE = {
  meetups: [],
  error: {},
  isLoading: false,
};

export const meetupReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_UPCOMING_MEETUPS_SUCCESS:
    case GET_ALL_MEETUPS_SUCCESS:
      return {
        ...state,
        meetups: action.meetups,
      };
    case GET_UPCOMING_MEETUPS_ERROR:
    case GET_ALL_MEETUPS_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case CREATE_MEETUP_PROCESS:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_MEETUP_SUCCESS:
      return {
        ...state,
        meetups: action.meetups,
        isLoading: false,
      };
    case CREATE_MEETUP_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
};
