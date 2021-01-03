import { combineReducers } from 'redux';
import activity from './modules/activity';
import jobTag from './modules/jobTag';
import skillTag from './modules/skillTag';
import modal from './modules/modal';

const rootReducer = combineReducers({
  activity,
  jobTag,
  skillTag,
  modal,
});

export default rootReducer;
