const SET_USERANSWER = 'useranswer/SET_USERANSWER';

export const setUseranswer = (useranswer, idx) => ({
  type: SET_USERANSWER,
  useranswer,
  idx,
});
const initialState = {
  useranswer: {
    0: '',
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERANSWER:
      state.useranswer[action.idx] = action.useranswer;
      return state;
    default:
      return state;
  }
}
