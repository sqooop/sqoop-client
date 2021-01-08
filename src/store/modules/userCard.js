const SET_ANSWER = 'userCard/SET_ANSWER';
const SET_QUESTIONS = 'userCard/SET_QUESTIONS';
const SET_TITLE = 'userCard/SET_TITLE';

export const setAnswer = (useranswer, idx) => ({
  type: SET_ANSWER,
  useranswer,
  idx,
});
export const setQuestions = data => ({
  type: SET_QUESTIONS,
  data,
});
export const setTitle = data => ({
  type: SET_TITLE,
  data,
});

const initialState = {
  title: '',
  sqoops: {
    q: [],
    a: {
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
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ANSWER:
      state.sqoops.a[action.idx] = action.useranswer;
      return state;
    case SET_QUESTIONS:
      return {
        ...state,
        question: action.data,
      };
    case SET_TITLE:
      return {
        ...state,
        title: action.data,
      };
    default:
      return state;
  }
}
