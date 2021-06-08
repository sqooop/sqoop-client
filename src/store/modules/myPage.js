const SET_BIRTHDAY = 'MYPAGE/SET_BIRTHDAY';
const SET_PHONE = 'MYPAGE/SET_PHONE';
const SET_EMAIL = 'MYPAGE/SET_EMAIL';
const SET_URL = 'MYPAGE/SET_URL';
const SET_EDUCATION = 'MYPAGE/SET_EDUCATION';
const SET_JOB_BIG = 'MYPAGE/JOB_BIG';
const SET_JOB_SMALL = 'MYPAGE/JOB_SMALL';
const SET_SKILL_BIG = 'MYPAGE/SKILL_BIG';
const SET_SKILL_SMALL = 'MYPAGE/SKILL_SMALL';
const SET_LANG_HISTORY = 'MYPAGE/LANG_HISTORY';
const SET_CERTIFICATE_HISTORY = 'MYPAGE/CERTIFICATE_HISTORY';
const SET_AWARD_HISTORY = 'MYPAGE/SET_AWARD_HISTORY';
const SET_INTRODUCE = 'MYPAGE/SET_INTRODUCE';
const SET_PROFILE_IMG = 'MYPAGE/SET_PROFILE_IMG';

export const setBirthday = string => ({
  type: SET_BIRTHDAY,
  string,
});
export const setPhone = string => ({
  type: SET_PHONE,
  string,
});
export const setEmail = string => ({
  type: SET_EMAIL,
  string,
});
export const setURL = string => ({
  type: SET_URL,
  string,
});
export const setEducation = array => ({
  type: SET_EDUCATION,
  array,
});
export const setJobBig = string => ({
  type: SET_JOB_BIG,
  string,
});
export const setJobSmall = string => ({
  type: SET_JOB_SMALL,
  string,
});
export const setSkillBig = string => ({
  type: SET_SKILL_BIG,
  string,
});
export const setSkillSmall = string => ({
  type: SET_SKILL_SMALL,
  string,
});
export const setLangHistory = object => ({
  type: SET_LANG_HISTORY,
  object,
});
export const setCertificateHistory = object => ({
  type: SET_CERTIFICATE_HISTORY,
  object,
});
export const setAwardHistory = object => ({
  type: SET_AWARD_HISTORY,
  object,
});
export const setIntroduce = string => ({
  type: SET_INTRODUCE,
  string,
});
export const setProfileImg = string => ({
  type: SET_PROFILE_IMG,
  string,
});

const initialState = {
  birthday: '20200101',
  phone: '',
  profileEmail: '',
  profileImg: '',
  sns: '',
  education: '',
  jobBig: '',
  jobSmall: '',
  skillBig: '',
  skillSmall: '',
  langHistory: '',
  certificateHistory: '',
  awardHistory: '',
  introduce: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_BIRTHDAY:
      state.birthday = action.string;
      return state;
    case SET_PHONE:
      state.phone = action.string;
      return state;
    case SET_EMAIL:
      state.profileEmail = action.string;
      return state;
    case SET_URL:
      state.sns = action.string;
      return state;
    case SET_EDUCATION:
      state.education = action.array;
      return state;
    case SET_JOB_BIG:
      state.jobBig = action.string;
      return state;
    case SET_JOB_SMALL:
      state.jobSmall = action.string;
      return state;
    case SET_SKILL_BIG:
      state.skillBig = action.string;
      return state;
    case SET_SKILL_SMALL:
      state.skillSmall = action.string;
      return state;
    case SET_LANG_HISTORY:
      state.langHistory = action.object;
      return state;
    case SET_CERTIFICATE_HISTORY:
      state.certificateHistory = action.object;
      return state;
    case SET_AWARD_HISTORY:
      state.awardHistory = action.object;
      return state;
    case SET_INTRODUCE:
      state.introduce = action.string;
      return state;
    case SET_PROFILE_IMG:
      state.profileImg = action.string;
      return state;
    default:
      return state;
  }
}
