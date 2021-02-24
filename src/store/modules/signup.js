const SET_EMAIL = 'signUp/SET_EMAIL';
const SET_PASSWORD = 'signUp/SET_PASSWORD';
const SET_PASSWORD_CHECK = 'signUp/SET_PASSWORD_CHECK';
const SET_USERNAME = 'signUp/SET_USERNAME';
const SET_BIRTH = 'signUp/SET_BIRTH';
const SET_PHONE = 'signUp/SET_PHONE';
const SET_EMAIL_WARNING = 'signUp/SET_EMAIL_WARNING';
const SET_PASSWORD_WARNING = 'signUp/SET_PASSWORD_WARNING';
const SET_PASSWORD_CHECK_WARNING = 'signUp/SET_PASSWORD_CHECK_WARNING';
const SET_PHONE_WARNING = 'signUp/SET_PHONE_WARNING';
const SET_YEAR = 'signUp/SET_YEAR';
const SET_MONTH = 'signUp/SET_MONTH';
const SET_DAY = 'signUp/SET_DAY';
const SET_CHECK = 'signUp/SET_CHECK';
const SET_VISIBLE = 'signUp/SET_VISIBLE';

export const setEmail = email => ({
  type: SET_EMAIL,
  email,
});
export const setPassword = password => ({
  type: SET_PASSWORD,
  password,
});
export const setPasswordCheck = data => ({
  type: SET_PASSWORD_CHECK,
  data,
});
export const setName = data => ({
  type: SET_USERNAME,
  data,
});
export const setBirth = data => ({
  type: SET_BIRTH,
  data,
});
export const setYear = data => ({
  type: SET_YEAR,
  data,
});
export const setMonth = data => ({
  type: SET_MONTH,
  data,
});
export const setDay = data => ({
  type: SET_DAY,
  data,
});
export const setPhone = data => ({
  type: SET_PHONE,
  data,
});
export const setEmailWarning = data => ({
  type: SET_EMAIL_WARNING,
  data,
});
export const setPasswordWarning = data => ({
  type: SET_PASSWORD_WARNING,
  data,
});
export const setPasswordCheckWarning = data => ({
  type: SET_PASSWORD_CHECK_WARNING,
  data,
});
export const setPhoneWarning = data => ({
  type: SET_PHONE_WARNING,
  data,
});
export const setCheck = data => ({
  type: SET_CHECK,
  data,
});
export const setVisible = data => ({
  type: SET_VISIBLE,
  data,
});
const initialState = {
  email: '',
  password: '',
  passwordCheck: '',
  userName: '',
  birthday: '',
  phone: '',
  emailWarning: '',
  passwordWarning: '',
  passwordCheckWarning: '',
  phoneWarning: '',
  year: '',
  month: '',
  day: '',
  isChecked: false,
  isVisible: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: action.password,
      };
    case SET_PASSWORD_CHECK:
      return {
        ...state,
        passwordCheck: action.data,
      };
    case SET_USERNAME:
      return {
        ...state,
        userName: action.data,
      };
    case SET_BIRTH:
      return {
        ...state,
        birthday: action.data,
      };
    case SET_PHONE:
      return {
        ...state,
        phone: action.data,
      };
    case SET_EMAIL_WARNING:
      return {
        ...state,
        emailWarning: action.data,
      };
    case SET_PASSWORD_WARNING:
      return {
        ...state,
        passwordWarning: action.data,
      };
    case SET_PASSWORD_CHECK_WARNING:
      return {
        ...state,
        passwordCheckWarning: action.data,
      };
    case SET_PHONE_WARNING:
      return {
        ...state,
        phoneWarning: action.data,
      };
    case SET_YEAR:
      return {
        ...state,
        year: action.data,
      };
    case SET_MONTH:
      return {
        ...state,
        month: action.data,
      };
    case SET_DAY:
      return {
        ...state,
        day: action.data,
      };
    case SET_CHECK:
      return {
        ...state,
        isChecked: action.data,
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
