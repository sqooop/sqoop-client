const FILTER_SET_STATUS = 'filter/SET_STATUS';
const FILTER_SET_JOB = 'filter/SET_JOB';
const FILTER_SET_SKILL = 'filter/SET_SKILL';
const FILTER_SET_DATE = 'filter/SET_DATE';
const FILTER_SET_ALL_SKILL = 'filter/SET_ALL_SKILL';
const FILTER_SET_ALL_JOB = 'filter/SET_ALL_JOB';
const FILTER_OPEN = 'filter/FILTER_OPEN';

export const setStatus = data => ({
  type: FILTER_SET_STATUS,
  data,
});
export const setDate = dateString => ({
  type: FILTER_SET_DATE,
  dateString,
});
export const setJob = job => ({
  type: FILTER_SET_JOB,
  job,
});
export const setSkill = skill => ({
  type: FILTER_SET_SKILL,
  skill,
});
export const setAllJob = data => ({
  type: FILTER_SET_ALL_JOB,
  data,
});

export const setAllSkill = data => ({
  type: FILTER_SET_ALL_SKILL,
  data,
});
export const setFilterOpen = data => ({
  type: FILTER_OPEN,
  data,
});
const initialState = {
  status: '활동 모아보기',
  startDate: '',
  endDate: '',
  jobTag: [],
  skillTag: [],
  allJobTag: [],
  allSkillTag: [],
  isOpen: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_SET_STATUS:
      return {
        ...state,
        status: action.data,
      };
    case FILTER_SET_DATE:
      return {
        ...state,
        startDate: action.dateString[0],
        endDate: action.dateString[1],
      };
    case FILTER_SET_JOB:
      return {
        ...state,
        jobTag: action.job,
      };
    case FILTER_SET_SKILL:
      return {
        ...state,
        skillTag: action.skill,
      };
    case FILTER_SET_ALL_JOB:
      return {
        ...state,
        allJobTag: action.data,
      };
    case FILTER_SET_ALL_SKILL:
      return {
        ...state,
        allSkillTag: action.data,
      };
    case FILTER_OPEN:
      return {
        ...state,
        isOpen: action.data,
      };
    default:
      return state;
  }
}
