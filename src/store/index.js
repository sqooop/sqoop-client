import { combineReducers } from 'redux';
import activity from './modules/activity';
import jobTag from './modules/jobTag';
import skillTag from './modules/skillTag';
import modal from './modules/modal';
import file from './modules/file';

const rootReducer = combineReducers({
  activity,
  jobTag,
  skillTag,
  modal,
  file,
});

export default rootReducer;
