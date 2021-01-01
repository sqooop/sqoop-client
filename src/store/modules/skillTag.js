const SET_SKILL_ITEMS = 'activity/SET_SKILL_ITEMS';
const SET_SKILL_NAME = 'activity/SET_SKILL_NAME';

export const setSkillItems = items => ({
  type: SET_SKILL_ITEMS,
  items,
});

export const setSkillName = name => ({
  type: SET_SKILL_NAME,
  name,
});

const initialState = {
  items: [],
  name: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_SKILL_ITEMS:
      return {
        ...state,
        items: action.items,
      };
    case SET_SKILL_NAME:
      return {
        ...state,
        name: action.name,
      };
    default:
      return state;
  }
}
