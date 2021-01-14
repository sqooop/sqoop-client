const SET_DETAIL_START = 'detail/SET_DETAIL_START';
const SET_DETAIL_END = 'detail/SET_DETAIL_END';
const SET_DETAIL_TITLE = 'detail/SET_DETAIL_TITLE';
const SET_DETAIL_GROUP = 'detail/SET_DETAIL_GROUP';
const SET_DETAIL_SUMMARY = 'detail/SET_DETAIL_SUMMARY';
const SET_DETAIL_JOB = 'detail/SET_DETAIL_JOB';
const SET_DETAIL_SKILL = 'detail/SET_DETAIL_SKILL';
const SET_DETAIL_IMAGE = 'detail/SET_DETAIL_IMAGE';
const SET_DETAIL_FILE = 'detail/SET_DETAIL_FILE';
const SET_DETAIL_FILENAME = 'detail/SET_DETAIL_FILENAME';
const SET_DETAIL_STATE = 'detail/SET_DETAIL_STATE';

export const setDetailStart = detailStart => ({
  type: SET_DETAIL_START,
  detailStart,
});

export const setDetailEnd = detailEnd => ({
  type: SET_DETAIL_END,
  detailEnd,
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

export const setDetailJob = detailJobTag => ({
  type: SET_DETAIL_JOB,
  detailJobTag,
});

export const setDetailSkill = detailSkillTag => ({
  type: SET_DETAIL_SKILL,
  detailSkillTag,
});

export const setDetailImage = detailImageUrl => ({
  type: SET_DETAIL_IMAGE,
  detailImageUrl,
});

export const setDetailFile = detailFileUrl => ({
  type: SET_DETAIL_FILE,
  detailFileUrl,
});

export const setDetailFilename = detailFilename => ({
  type: SET_DETAIL_FILENAME,
  detailFilename,
});

export const setDetailState = detailState => ({
  type: SET_DETAIL_STATE,
  detailState,
});

const initialState = {
  detailTitle: '',
  detailStart: '',
  detailEnd: '',
  detailGroup: '',
  detailJobTag: [],
  detailSkillTag: [],
  detailSummary: '',
  detailImageUrl: '',
  detailFileUrl: '',
  detailFilename: '',
  detailState: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_DETAIL_TITLE:
      return {
        ...state,
        detailTitle: action.detailTitle,
      };
    case SET_DETAIL_START:
      return {
        ...state,
        detailStart: action.detailStart,
      };
    case SET_DETAIL_END:
      return {
        ...state,
        detailEnd: action.detailEnd,
      };
    case SET_DETAIL_GROUP:
      return {
        ...state,
        detailGroup: action.detailGroup,
      };
    case SET_DETAIL_SUMMARY:
      return {
        ...state,
        detailSummary: action.detailSummary,
      };
    case SET_DETAIL_JOB:
      return {
        ...state,
        detailJobTag: action.detailJobTag,
      };
    case SET_DETAIL_SKILL:
      return {
        ...state,
        detailSkillTag: action.detailSkillTag,
      };
    case SET_DETAIL_IMAGE:
      return {
        ...state,
        detailImageUrl: action.detailImageUrl,
      };
    case SET_DETAIL_FILE:
      return {
        ...state,
        detailFileUrl: action.detailFileUrl,
      };
    case SET_DETAIL_FILENAME:
      return {
        ...state,
        detailFilename: action.detailFilename,
      };
    case SET_DETAIL_STATE:
      return {
        ...state,
        detailState: action.detailState,
      };
    default:
      return state;
  }
}
