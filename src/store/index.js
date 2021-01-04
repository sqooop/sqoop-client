import { combineReducers } from 'redux';
import activity from './modules/activity';
import jobTag from './modules/jobTag';
import skillTag from './modules/skillTag';
import useranswer from './modules/useranswer';
import modal from './modules/modal';

const rootReducer = combineReducers({
  activity,
  jobTag,
  skillTag,
  useranswer,
  modal,
});

export default rootReducer;
