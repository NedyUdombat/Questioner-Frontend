import { combineReducers } from 'redux';
import { meetupReducer } from './modules/meetup';
import { authReducer } from './modules/auth';
import { questionReducer } from './modules/question';

export default combineReducers({
  meetups: meetupReducer,
  auth: authReducer,
  questions: questionReducer,
});
