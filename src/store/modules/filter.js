const SET_STATUS = 'activity/SET_STATUS';

export const setStatus = data => ({
  type: SET_STATUS,
  data,
});

const initialState = {
  status: 'all',
  startDate: '',
  endDate: '',
  jobTag: [],
  skillTag: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_STATUS:
      return {
        ...state,
        status: action.data,
      };
    default:
      return state;
  }
}
