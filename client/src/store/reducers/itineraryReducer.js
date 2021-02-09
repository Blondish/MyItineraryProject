const initState = {
  itineraries: [],
  isLoaded: false
};

const itineraryReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOADING_ITINERARIES":
      return {
        ...state,
        isLoaded: true
      };
    case "FETCH_ITINERARIES":
      return {
        ...state,
        itineraries: action.payload,
        isLoaded: false
      };

    default:
      return {
        ...state
      };
  }
};

export default itineraryReducer;
