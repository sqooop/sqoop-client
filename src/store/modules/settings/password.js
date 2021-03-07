const SET_PASSWORD = 'settings/password/SET_PASSWORD';
const SET_NEW_PASSWORD = 'settings/password/SET_NEW_PASSWORD';
const SET_PASSWORD_CHECK = 'settings/password/SET_PASSWORD_CHECK';
const SET_VISIBLE = 'settings/password/SET_PASSWORD';
const SET_PWARN = 'settings/password/SET_PASSWORD_WARNING';
const SET_NWARN = 'settings/password/SET_NEW_PASSWORD_WARNING';
const SET_CWARN = 'settings/password/SET_PASSWORD_CHECK_WARNING';
const SET_BUTTON = 'settings/password/SET_BUTTON';

export const setButton = data => ({
  type: SET_BUTTON,
  data,
});
export const setPassword = data => ({
  type: SET_PASSWORD,
  data,
});
export const setNewPassword = data => ({
  type: SET_NEW_PASSWORD,
  data,
});
export const setPasswordCheck = data => ({
  type: SET_PASSWORD_CHECK,
  data,
});
export const setVisible = data => ({
  type: SET_VISIBLE,
  data,
});
export const setPWarn = data => ({
  type: SET_PWARN,
  data,
});
export const setNWarn = data => ({
  type: SET_NWARN,
  data,
});
export const setCWarn = data => ({
  type: SET_CWARN,
  data,
});
const initialState = {
  password: '',
  pwarning: '',
  newPassword: '',
  nwarning: '',
  passwordCheck: '',
  cwarning: '',
  isVisible: false,
  button: '변경하기',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_BUTTON:
      return {
        ...state,
        button: action.data,
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: action.data,
      };
    case SET_NEW_PASSWORD:
      return {
        ...state,
        newPassword: action.data,
      };
    case SET_PASSWORD_CHECK:
      return {
        ...state,
        passwordCheck: action.data,
      };
    case SET_VISIBLE:
      return {
        ...state,
        isVisible: action.data,
      };
    case SET_PWARN:
      return {
        ...state,
        pwarning: action.data,
      };
    case SET_NWARN:
      return {
        ...state,
        nwarning: action.data,
      };
    case SET_CWARN:
      return {
        ...state,
        cwarning: action.data,
      };
    default:
      return state;
  }
}
