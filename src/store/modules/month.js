const SET_MONTH = 'MONTH/SET_MONTH';

export const setMonth = data => ({
  type: SET_MONTH,
  data,
});

const initialState = {
  month: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_MONTH:
      return {
        month: action.data,
      };
    default:
      return state;
  }
}
