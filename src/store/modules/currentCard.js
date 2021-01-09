const SET_SAVED = 'CURRENT_CARD/SET_SAVED';
const SET_NOT_SAVED = 'CURRENT_CARD/SET_NOT_SAVED';
const SET_TEXT_VALUE = 'CURRENT_CARD/SET_TEXT_VALUE';
const SET_TEXT_LIMIT = 'CURRENT_CARD/SET_TEXT_LIMIT';
const SET_MODAL_ACTIVE = 'CURRENT_CARD/SET_MODAL_ACTIVE';

export const setSaved = data => ({
  type: SET_SAVED,
  data,
});
export const setNotSaved = data => ({
  type: SET_NOT_SAVED,
  data,
});
export const setTextValue = text => ({
  type: SET_TEXT_VALUE,
  text,
});
export const setTextLimit = number => ({
  type: SET_TEXT_LIMIT,
  number,
});
export const setModalActive = data => ({
  type: SET_MODAL_ACTIVE,
  data,
});

const initialState = {
  saved: false,
  notSaved: false,
  textValue: '',
  textLimit: 0,
  modalActive: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_SAVED:
      return {
        ...state,
        saved: action.data,
      };
    case SET_NOT_SAVED:
      return {
        ...state,
        notSaved: action.data,
      };
    case SET_TEXT_VALUE:
      return {
        ...state,
        textValue: action.text,
      };
    case SET_TEXT_LIMIT:
      return {
        ...state,
        textLimit: action.number,
      };
    case SET_MODAL_ACTIVE:
      return {
        ...state,
        modalActive: action.data,
      };
    default:
      return state;
  }
}
