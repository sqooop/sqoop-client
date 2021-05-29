const SET_EMAIL = 'settings/account/SET_EMAIL';
const SET_PHONE = 'settings/account/SET_PHONE';
const SET_MARKETING = 'settings/account/SET_MARKETING';
const SET_MARKETING_CHECK = 'settings/account/SET_MARKETING_CHECK';

export const setEmail = data => ({
  type: SET_EMAIL,
  data,
});
export const setPhone = data => ({
  type: SET_PHONE,
  data,
});
export const setMarketing = data => ({
  type: SET_MARKETING,
  data,
});
export const setMarketingCheck = data => ({
  type: SET_MARKETING_CHECK,
  data,
});
const initialState = {
  email: '',
  phone: '',
  marketing: null,
  marketingCheck: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        email: action.data,
      };
    case SET_PHONE:
      return {
        ...state,
        phone: action.data,
      };
    case SET_MARKETING:
      return {
        ...state,
        marketing: action.data,
      };
    case SET_MARKETING_CHECK:
      return {
        ...state,
        marketingCheck: action.data,
      };
    default:
      return state;
  }
}
