import { combineReducers } from 'redux';
import activity from './modules/activity';
import activities from './modules/activities';
import jobTag from './modules/jobTag';
import skillTag from './modules/skillTag';
import useranswer from './modules/useranswer';
import modal from './modules/modal';
import preview from './modules/preview';
import currentCard from './modules/currentCard';
import userCardInfo from './modules/userCardInfo';
import cardIndex from './modules/cardIndex';
import filter from './modules/filter';

const rootReducer = combineReducers({
  activity,
  activities,
  jobTag,
  skillTag,
  useranswer,
  modal,
  preview,
  currentCard,
  userCardInfo,
  cardIndex,
  filter,
});

export default rootReducer;
