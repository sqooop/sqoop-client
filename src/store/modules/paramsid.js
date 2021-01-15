const SET_PARAMS_ID = 'paramsid/SET_PARAMS_ID';

export const setParamsID = id => {
  return {
    type: SET_PARAMS_ID,
    id,
  };
};

const initialState = {
  id: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_PARAMS_ID:
      return {
        ...state,
        id: action.id,
      };
    default:
      return state;
  }
}
