import {
  geUpcomingMeetupsRequest,
  getAllMeetupsRequest,
} from '../../api/meetup';

// actions
export const GET_UPCOMING_MEETUPS_ERROR = 'GET_UPCOMING_MEETUPS_ERROR';
export const GET_UPCOMING_MEETUPS_SUCCESS = 'GET_UPCOMING_MEETUPS_SUCCESS';
export const GET_ALL_MEETUPS_ERROR = 'GET_ALL_MEETUPS_ERROR';
export const GET_ALL_MEETUPS_SUCCESS = 'GET_ALL_MEETUPS_SUCCESS';

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

export const DEFAULT_STATE = {
  meetups: [],
  error: {},
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
    default:
      return state;
  }
};
