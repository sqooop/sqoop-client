const SET_EDIT_MODE = 'EDIT/SET_EDIT_MODE';

export const setEditMode = data => ({
  type: SET_EDIT_MODE,
  data,
});

const initialState = {
  isEditMode: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_EDIT_MODE:
      return {
        isEditMode: action.data,
      };
    default:
      return state;
  }
}
