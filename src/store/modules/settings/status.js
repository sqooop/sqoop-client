const SET_STATUS = 'settings/SET_STATUS';

export const setStatus = data => ({
  type: SET_STATUS,
  data,
});
const initialState = {
  status: '계정 정보 확인',
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
