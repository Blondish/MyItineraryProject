const initState = {
  cities: [],
  isLoaded: false
};

const citiesReducer = (state = initState, action) => {
  console.log("Red", state.isLoaded)
  switch (action.type) {
    case "LOADING_CITIES":
      return {
        ...state,
        isLoaded: true
      };
    case "FETCH_CITIES":
      return {
        ...state,
        cities: action.payload,
        isLoaded: false
      };
    default:
      return {
        ...state
      };
  }
};

export default citiesReducer;
