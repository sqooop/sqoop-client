const SET_ACTIVITIES = 'activities/SET_ACTIVITIES';

export const setActivities = data => ({
  type: SET_ACTIVITIES,
  data,
});

const initialState = {
  activities: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVITIES:
      return {
        ...state,
        activities: action.data,
      };
    default:
      return state;
  }
}
