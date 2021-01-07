import { combineReducers } from 'redux';
import activity from './modules/activity';
import activities from './modules/activities';
import jobTag from './modules/jobTag';
import skillTag from './modules/skillTag';
import useranswer from './modules/useranswer';
import modal from './modules/modal';
import preview from './modules/preview';
import currentCard from './modules/currentCard';
import userCard from './modules/userCard';

const rootReducer = combineReducers({
  activity,
  activities,
  jobTag,
  skillTag,
  useranswer,
  modal,
  preview,
  currentCard,
  userCard,
});

export default rootReducer;
