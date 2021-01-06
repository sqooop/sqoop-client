const SET_DATE = 'activity/SET_DATE';
const SET_TITLE = 'activity/SET_TITLE';
const SET_GROUP = 'activity/SET_GROUP';
const SET_SUMMARY = 'activity/SET_SUMMARY';
const SET_JOB = 'activity/SET_JOB';
const SET_SKILL = 'activity/SET_SKILL';
const SET_IMAGE = 'activity/SET_IMAGE';
const SET_FILE = 'activity/SET_FILE';

export const setDate = dateString => ({
  type: SET_DATE,
  dateString,
});

export const setTitle = title => ({
  type: SET_TITLE,
  title,
});

export const setGroup = group => ({
  type: SET_GROUP,
  group,
});

export const setSummary = summary => ({
  type: SET_SUMMARY,
  summary,
});

export const setJob = job => ({
  type: SET_JOB,
  job,
});

export const setSkill = skill => ({
  type: SET_SKILL,
  skill,
});

export const setImage = image => ({
  type: SET_IMAGE,
  image,
});

export const setFile = file => ({
  type: SET_FILE,
  file,
});

const initialState = {
  title: '',
  startDate: '',
  endDate: '',
  group: '',
  jobTag: [],
  skillTag: [],
  summary: '',
  imageUrl: '',
  fileUrl: '',
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
    case SET_GROUP:
      return {
        ...state,
        group: action.group,
      };
    case SET_SUMMARY:
      return {
        ...state,
        summary: action.summary,
      };
    case SET_JOB:
      return {
        ...state,
        jobTag: action.job,
      };
    case SET_SKILL:
      return {
        ...state,
        skillTag: action.skill,
      };
    case SET_IMAGE:
      return {
        ...state,
        imageUrl: action.image,
      };
    case SET_FILE:
      return {
        ...state,
        fileUrl: action.file,
      };
    default:
      return state;
  }
}
