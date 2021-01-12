const SET_DETAIL_DATE = 'detail/SET_DETAIL_DATE';
const SET_DETAIL_TITLE = 'detail/SET_DETAIL_TITLE';
const SET_DETAIL_GROUP = 'detail/SET_DETAIL_GROUP';
const SET_DETAIL_SUMMARY = 'detail/SET_DETAIL_SUMMARY';
const SET_DETAIL_JOB = 'detail/SET_DETAIL_JOB';
const SET_DETAIL_SKILL = 'detail/SET_DETAIL_SKILL';
const SET_DETAIL_IMAGE = 'detail/SET_DETAIL_IMAGE';
const SET_DETAIL_FILE = 'detail/SET_DETAIL_FILE';

export const setDetailDate = dateString => ({
  type: SET_DETAIL_DATE,
  dateString,
});

export const setDetailTitle = detailTitle => ({
  type: SET_DETAIL_TITLE,
  detailTitle,
});

export const setDetailGroup = detailGroup => ({
  type: SET_DETAIL_GROUP,
  detailGroup,
});

export const setDetailSummary = detailSummary => ({
  type: SET_DETAIL_SUMMARY,
  detailSummary,
});

export const setDetailJob = detailJob => ({
  type: SET_DETAIL_JOB,
  detailJob,
});

export const setDetailSkill = detailSkill => ({
  type: SET_DETAIL_SKILL,
  detailSkill,
});

export const setDetailImage = detailImage => ({
  type: SET_DETAIL_IMAGE,
  detailImage,
});

export const setDetailFile = detailFile => ({
  type: SET_DETAIL_FILE,
  detailFile,
});

const initialState = {
  detailTitle: '',
  detailStartDate: '',
  detailEndDate: '',
  detailGroup: '',
  detailJobTag: [],
  detailSkillTag: [],
  detailSummary: '',
  detailImageUrl: '',
  detailFileUrl: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_DETAIL_TITLE:
      return {
        ...state,
        detailTitle: action.title,
      };
    case SET_DETAIL_DATE:
      return {
        ...state,
        detailStartDate: action.dateString[0],
        detailEndDate: action.dateString[1],
      };
    case SET_DETAIL_GROUP:
      return {
        ...state,
        detailGroup: action.group,
      };
    case SET_DETAIL_SUMMARY:
      return {
        ...state,
        detailSummary: action.summary,
      };
    case SET_DETAIL_JOB:
      return {
        ...state,
        detailJobTag: action.job,
      };
    case SET_DETAIL_SKILL:
      return {
        ...state,
        detailSkillTag: action.skill,
      };
    case SET_DETAIL_IMAGE:
      return {
        ...state,
        detailImageUrl: action.image,
      };
    case SET_DETAIL_FILE:
      return {
        ...state,
        detailFileUrl: action.file,
      };
    default:
      return state;
  }
}
