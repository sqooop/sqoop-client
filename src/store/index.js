import { combineReducers } from 'redux';
import activity from './modules/activity';
import jobTag from './modules/jobTag';
import skillTag from './modules/skillTag';

const rootReducer = combineReducers({
  activity,
  jobTag,
  skillTag,
});

export default rootReducer;
