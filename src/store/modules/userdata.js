const SET_QUESTION = 'useranswer/SET_QUESTION';
const SET_USERANSWER = 'useranswer/SET_USERANSWER';
const SET_ALL_DATA = 'useranswer/SET_ALL_DATA';
const SET_ORDER = 'useranswer/SET_ORDER';

export const setUseranswer = (useranswer, idx) => ({
  type: SET_USERANSWER,
  useranswer,
  idx,
});

export const setQuestion = (question, idx) => ({
  type: SET_QUESTION,
  question,
  idx,
});

export const setNumber = (order, idx) => ({
  type: SET_ORDER,
  order,
  idx,
});

export const setAllData = data => ({
  type: SET_ALL_DATA,
  data,
});

const initialState = {
  useranswer: {
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
    10: '',
  },

  question: {
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
    10: '',
  },

  order: {
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
    10: '',
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

    case SET_ORDER:
      state.order[action.idx] = action.order;
      return state;

    case SET_ALL_DATA:
      action.data.map(item => {
        state.useranswer[item.number] = item.content;
        state.question[item.number] = item.question;
        state.order[item.number] = item.number;
      });
      return state;
    default:
      return state;
  }
}
