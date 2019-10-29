const initState = {
  itineraries: []
};

const itineraryReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_ITINERARIES":
      return {
        ...state,
        itineraries: action.payload
      };

    default:
      return {
        ...state
      };
  }
};

export default itineraryReducer;
