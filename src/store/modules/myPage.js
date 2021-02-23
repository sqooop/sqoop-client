const SET_BIRTHDAY = 'MYPAGE/SET_BIRTHDAY';
const SET_PHONE = 'MYPAGE/SET_PHONE';
const SET_EMAIL = 'MYPAGE/SET_EMAIL';
const SET_URL = 'MYPAGE/SET_URL';
const SET_EDUCATION = 'MYPAGE/SET_EDUCATION';

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

const initialState = {
  birthday: '20200101',
  phone: '',
  email: '',
  url: '',
  education: '',
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
      state.email = action.string;
      return state;
    case SET_URL:
      state.url = action.string;
      return state;
    case SET_EDUCATION:
      state.education = action.array;
      return state;
    default:
      return state;
  }
}
