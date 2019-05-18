import { combineReducers } from 'redux';
import { meetupReducer } from './modules/meetup';

export default combineReducers({ meetups: meetupReducer });
