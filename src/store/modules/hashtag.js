const SET_ITEMS = 'activity/SET_ITEMS';
const SET_NAME = 'activity/SET_NAME';

export const setItems = items => ({
  type: SET_ITEMS,
  items,
});

export const setName = name => ({
  type: SET_NAME,
  name,
});

const initialState = {
  items: [],
  name: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: action.items,
      };
    case SET_NAME:
      return {
        ...state,
        name: action.name,
      };
    default:
      return state;
  }
}
