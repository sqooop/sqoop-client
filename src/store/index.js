import { combineReducers } from 'redux';
import activity from './modules/activity';
import activities from './modules/activities';
import jobTag from './modules/jobTag';
import skillTag from './modules/skillTag';
import userdata from './modules/userdata';
import modal from './modules/modal';
import preview from './modules/preview';
import currentCard from './modules/currentCard';
import userCardInfo from './modules/userCardInfo';
import cardIndex from './modules/cardIndex';
import filter from './modules/filter';
import home from './modules/home';
import month from './modules/month';
import signIn from './modules/signIn';
import signup from './modules/signup';
import detail from './modules/detail';
import paramsid from './modules/paramsid';
import editButton from './modules/editButton';
import myPage from './modules/myPage';
import findEmail from './modules/findEmail';
import findPassword from './modules/findPassword';
import password from './modules/settings/password';
import status from './modules/settings/status';
import account from './modules/settings/account';

const rootReducer = combineReducers({
  activity,
  activities,
  jobTag,
  skillTag,
  userdata,
  modal,
  preview,
  currentCard,
  userCardInfo,
  cardIndex,
  filter,
  home,
  month,
  signIn,
  detail,
  paramsid,
  editButton,
  signup,
  myPage,
  findEmail,
  findPassword,
  password,
  status,
  account,
});

export default rootReducer;
