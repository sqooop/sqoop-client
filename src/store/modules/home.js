const SET_YEAR = 'HOME/SET_YEAR';
const SET_USER_NAME = 'HOME/SET_USER_NAME';
const SET_MONTH = 'HOME/SET_MONTH';
export const setYear = number => ({
  type: SET_YEAR,
  number,
});
export const setUserName = string => ({
  type: SET_USER_NAME,
  string,
});
export const setMonth = number => ({
  type: SET_MONTH,
  number,
});
const now = new Date();
const year = now.getFullYear();

const initialState = {
  year: year,
  name: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_YEAR:
      state.year = action.number;
      return state;
    case SET_USER_NAME:
      state.name = action.string;
      return state;
    case SET_MONTH:
      state.month = action.number;
      return state;
    default:
      return state;
  }
}
