const initState = {
  activities: []
};

const activityReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_ACTIVITIES":
      return {
        ...state,
        activities: action.payload
      };

    default:
      return {
        ...state
      };
  }
};

export default activityReducer;
