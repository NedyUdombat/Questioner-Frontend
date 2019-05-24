import { combineReducers } from 'redux';
import { meetupReducer } from './modules/meetup';
import { authReducer } from './modules/auth';

export default combineReducers({ meetups: meetupReducer, auth: authReducer });
