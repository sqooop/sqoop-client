const SET_EMAIL = 'findPassword/SET_EMAIL';
const SET_WARNING = 'findPassword/SET_WARNING';
const SET_VISIBLE = 'findPassword/SET_VISIBLE';

export const setEmail = email => ({
  type: SET_EMAIL,
  email,
});
export const setWarning = data => ({
  type: SET_WARNING,
  data,
});
export const setVisible = data => ({
  type: SET_VISIBLE,
  data,
});
const initialState = {
  email: '',
  warning: '',
  isVisible: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case SET_WARNING:
      return {
        ...state,
        warning: action.data,
      };
    case SET_VISIBLE:
      return {
        ...state,
        isVisible: action.data,
      };
    default:
      return state;
  }
}
