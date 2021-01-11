import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import * as cardAPI from '../../lib/api/cardList';
import { takeLatest } from 'redux-saga/effects';

const {
  READ_CARD,
  READ_CARD_SUCCESS,
  READ_CARD_FAILURE,
} = createRequestActionTypes('homeCard/READ_CARD');
const UNLOAD_CARD = 'homeCard/UNLOAD_CARD';

//export const readCard = createAction(READ_CARD);
//export const unloadCard = createAction(UNLOAD_CARD);

const homeCardSaga = createRequestSaga(READ_CARD, cardAPI.readCard);
export function* CardSaga() {
  yield takeLatest(READ_CARD, homeCardSaga);
}
const initialState = {
  post: null,
  error: null,
};
const cardList = handleActions(
  {
    [READ_CARD_SUCCESS]: (state, { payload: homeCard }) => ({
      ...state,
      homeCard,
    }),
    [READ_CARD_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_CARD]: () => initialState,
  },
  initialState,
);
export default cardList;
