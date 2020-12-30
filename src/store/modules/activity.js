const SET_DATE = 'activity/SET_DATE';
const SET_TITLE = 'activity/SET_TITLE';

export const setDate = dateString => ({
  type: SET_DATE,
  dateString,
});

export const setTitle = title => ({
  type: SET_TITLE,
  title,
});

const initialState = {
  title: '',
  startDate: '',
  endDate: '',
  group: [],
  job: [],
  capability: [],
  content: '',
  image: '',
  file: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_TITLE:
      return {
        ...state,
        title: action.title,
      };
    case SET_DATE:
      return {
        ...state,
        startDate: action.dateString[0],
        endDate: action.dateString[1],
      };
    default:
      return state;
  }
}
