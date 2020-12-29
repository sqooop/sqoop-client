const SET_DATE = 'activity/SET_DATE';

export const setDate = activity => ({
  type: SET_DATE,
  activity,
});

const initialState = {
  startDate: null,
  endDate: null,
  group: [],
  job: [],
  capability: [],
  content: '',
  image: '',
  file: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATE:
      return {
        ...state,
        startDate: action.startDate,
        endDate: action.endDate,
      };
    default:
      return state;
  }
}
