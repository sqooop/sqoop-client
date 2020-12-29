import { combineReducers } from 'redux';
import activity from './modules/activity';
import hashtags from './modules/hashtag';

const rootReducer = combineReducers({
  activity,
  hashtags,
});

export default rootReducer;
