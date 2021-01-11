const SET_YEAR = 'HOME/SET_YEAR';
const SET_USER_NAME = 'HOME/SET_USER_NAME';

export const setYear = number => ({
  type: SET_YEAR,
  number,
});
export const setUserName = string => ({
  type: SET_USER_NAME,
  string,
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
    default:
      return state;
  }
}
