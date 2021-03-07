const SET_YEAR = 'HOME/SET_YEAR';
const SET_USER_NAME = 'HOME/SET_USER_NAME';
const SET_MONTH = 'HOME/SET_MONTH';
const SET_CARD_ARRAY = 'HOME/SET_CARD_ARRAY';
const SET_FIRST_YEAR = 'HOME/SET_FIRST_YEAR';
const SET_LAST_YEAR = 'HOME/SET_LAST_YEAR';

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

export const setCardArray = array => ({
  type: SET_CARD_ARRAY,
  array,
});

export const setFirstYear = number => ({
  type: SET_FIRST_YEAR,
  number,
});
export const setLastYear = number => ({
  type: SET_LAST_YEAR,
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
    case SET_CARD_ARRAY:
      state.cards = action.array;
      return state;
    case SET_FIRST_YEAR:
      state.firstYear = action.number;
      return state;
    case SET_LAST_YEAR:
      state.lastYear = action.number;
      return state;
    default:
      return state;
  }
}
