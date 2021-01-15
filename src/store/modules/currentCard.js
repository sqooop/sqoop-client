const SET_SAVED = 'CURRENT_CARD/SET_SAVED';
const SET_NOT_SAVED = 'CURRENT_CARD/SET_NOT_SAVED';
const SET_TEXT_VALUE = 'CURRENT_CARD/SET_TEXT_VALUE';
const SET_TEXT_LIMIT = 'CURRENT_CARD/SET_TEXT_LIMIT';
const SET_MODAL_ACTIVE = 'CURRENT_CARD/SET_MODAL_ACTIVE';
const SET_CLASS_NAME_LEFT = 'CURRENT_CARD/SET_CLASS_NAME_LEFT';
const SET_CLASS_NAME_GROW = 'CURRENT_CARD/SET_CLASS_NAME_GROW';
const SET_CLASS_NAME_SHRINK = 'CURRENT_CARD/SET_CLASS_NAME_SHRINK';
const SET_CLASS_NAME_SHRINK_RIGHT = 'CURRENT_CARD/SET_CLASS_NAME_SHRINK_RIGHT';
const SET_CLASS_NAME_RIGHT = 'CURRENT_CARD/SET_CLASS_NAME_RIGHT';

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
export const setClassNameLeft = string => ({
  type: SET_CLASS_NAME_LEFT,
  string,
});
export const setClassNameGrow = string => ({
  type: SET_CLASS_NAME_GROW,
  string,
});
export const setClassNameShrink = string => ({
  type: SET_CLASS_NAME_SHRINK,
  string,
});
export const setClassNameShrinkRight = string => ({
  type: SET_CLASS_NAME_SHRINK_RIGHT,
  string,
});
export const setClassNameRight = string => ({
  type: SET_CLASS_NAME_RIGHT,
  string,
});

const initialState = {
  saved: false,
  notSaved: false,
  textValue: '',
  textLimit: 0,
  modalActive: false,
  classNameLeft: 'card',
  classNameGrow: 'card',
  classNameShrink: 'card',
  classNameShrinkRight: 'card',
  classNameRight: 'card',
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
    case SET_CLASS_NAME_LEFT:
      return {
        ...state,
        classNameLeft: action.string,
      };
    case SET_CLASS_NAME_GROW:
      return {
        ...state,
        classNameGrow: action.string,
      };
    case SET_CLASS_NAME_SHRINK:
      return {
        ...state,
        classNameShrink: action.string,
      };
    case SET_CLASS_NAME_SHRINK_RIGHT:
      return {
        ...state,
        classNameShrinkRight: action.string,
      };
    case SET_CLASS_NAME_RIGHT:
      return {
        ...state,
        classNameRight: action.string,
      };
    default:
      return state;
  }
}
