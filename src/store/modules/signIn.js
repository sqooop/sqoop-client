const SET_EMAIL = 'signIn/SET_EMAIL';
const SET_PASSWORD = 'signIn/SET_PASSWORD';
const SET_WARNING = 'signIn/SET_WARNING';
const SET_TOKEN = 'signIn/SET_TOKEN';

export const setEmail = email => ({
  type: SET_EMAIL,
  email,
});
export const setPassword = password => ({
  type: SET_PASSWORD,
  password,
});

export const setWarning = warning => ({
  type: SET_WARNING,
  warning,
});

export const setToken = token => ({
  type: SET_TOKEN,
  token,
});

const initialState = {
  email: '',
  password: '',
  warning: '',
  token: '',
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
    case SET_WARNING:
      return {
        ...state,
        warning: action.warning,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
}
