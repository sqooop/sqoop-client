const SET_VISIBLE = 'activity/SET_VISIBLE';

export const setVisible = isVisible => ({
  type: SET_VISIBLE,
  isVisible,
});

const initialState = {
  isVisible: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBLE:
      return {
        isVisible: action.isVisible,
      };
    default:
      return state;
  }
}
