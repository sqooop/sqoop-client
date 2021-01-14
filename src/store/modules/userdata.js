const SET_QUESTION = 'useranswer/SET_QUESTION';
const SET_USERANSWER = 'useranswer/SET_USERANSWER';

export const setUseranswer = (useranswer, idx) => ({
  type: SET_USERANSWER,
  useranswer,
  idx,
});

export const setQuestion = question => ({
  type: SET_QUESTION,
  question,
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
  question: {
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
    case SET_QUESTION:
      state.question[action.idx] = action.question;
      return state;
    default:
      return state;
  }
}
