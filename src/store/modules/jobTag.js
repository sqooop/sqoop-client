const SET_JOB_ITEMS = 'jobTag/SET_JOB_ITEMS';
const SET_JOB_NAME = 'jobTag/SET_JOB_NAME';

export const setJobItems = items => ({
  type: SET_JOB_ITEMS,
  items,
});

export const setJobName = name => ({
  type: SET_JOB_NAME,
  name,
});

const initialState = {
  items: [],
  name: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_JOB_ITEMS:
      return {
        ...state,
        items: action.items,
      };
    case SET_JOB_NAME:
      return {
        ...state,
        name: action.name,
      };
    default:
      return state;
  }
}
