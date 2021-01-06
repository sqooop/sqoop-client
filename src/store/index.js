import { combineReducers } from 'redux';
import activity from './modules/activity';
import jobTag from './modules/jobTag';
import skillTag from './modules/skillTag';
import useranswer from './modules/useranswer';
import modal from './modules/modal';
import auth from './modules/auth';

const rootReducer = combineReducers({
  auth,
  activity,
  jobTag,
  skillTag,
  useranswer,
  modal,
});

export default rootReducer;
