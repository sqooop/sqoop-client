const SET_YEAR = 'HOME/SET_YEAR';

export const setYear = number => ({
  type: SET_YEAR,
  number,
});

const now = new Date();
const year = now.getFullYear();

const initialState = {
  year: year,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_YEAR:
      state.year = action.number;
      return state;
    default:
      return state;
  }
}
