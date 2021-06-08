const SET_CURRENT_INDEX = 'CARD_INDEX/SET_CURRENT_INDEX';
const SET_PREV_INDEX = 'CARD_INDEX/SET_PREV_INDEX';
const SET_WRITTEN_INDEX = 'CARD_INDEX/SET_WRITTEN_INDEX';
const SET_ANI_INDEX = 'CARD_INDEX/SET_ANI_INDEX';

export const setCurrentIndex = idx => ({
  type: SET_CURRENT_INDEX,
  idx,
});
export const setPrevIndex = idx => ({
  type: SET_PREV_INDEX,
  idx,
});
export const setWrittenIndex = idx => ({
  type: SET_WRITTEN_INDEX,
  idx,
});
export const setAniIndex = data => ({
  type: SET_ANI_INDEX,
  data,
});

const initialState = {
  currentIndex: 0,
  previousIndex: -1,
  writtenIndex: 0,
  aniIndex: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_INDEX:
      return {
        ...state,
        currentIndex: action.idx,
      };
    case SET_PREV_INDEX:
      return {
        ...state,
        previousIndex: action.idx,
      };
    case SET_WRITTEN_INDEX:
      return {
        ...state,
        writtenIndex: action.idx,
      };
    case SET_ANI_INDEX:
      return {
        ...state,
        aniIndex: action.data,
      };
    default:
      return state;
  }
}
