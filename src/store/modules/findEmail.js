const SET_EMAIL = 'findEmail/SET_EMAIL';
const SET_PASSWORD = 'findEmail/SET_PASSWORD';
const SET_PASSWORD_CHECK = 'findEmail/SET_PASSWORD_CHECK';
const SET_USERNAME = 'findEmail/SET_USERNAME';
const SET_BIRTH = 'findEmail/SET_BIRTH';
const SET_PHONE = 'findEmail/SET_PHONE';
const SET_WARNING = 'findEmail/SET_WARNING';
const SET_YEAR = 'findEmail/SET_YEAR';
const SET_MONTH = 'findEmail/SET_MONTH';
const SET_DAY = 'findEmail/SET_DAY';

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
export const setWarning = data => ({
  type: SET_WARNING,
  data,
});
const initialState = {
  email: '',
  userName: '',
  birthday: '',
  phone: '',
  warning: '',
  year: '',
  month: '',
  day: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        email: action.email,
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
    case SET_WARNING:
      return {
        ...state,
        warning: action.data,
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
    default:
      return state;
  }
}
