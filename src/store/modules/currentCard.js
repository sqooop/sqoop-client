const SET_SAVED = 'CURRENT_CARD/SET_SAVED';

export const setSaved = saved => ({
  type: SET_SAVED,
  saved,
});

const initialState = {
  saved: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_SAVED:
      return {
        ...state,
        saved: action.saved,
      };
    default:
      return state;
  }
}
