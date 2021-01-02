const SET_USERANSWER = 'useranswer/SET_USERANSWER';

export const setUseranswer = useranswer => ({
  type: SET_USERANSWER,
  useranswer,
});

const initialState = {
  useranswer: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERANSWER:
      return {
        ...state,
        useranswer: action.useranswer,
      };
    default:
      return state;
  }
}
