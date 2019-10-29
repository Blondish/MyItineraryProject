const initState = {
  cities: []
};

const citiesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_CITIES":
      return {
        ...state,
        cities: action.payload
      };

    default:
      return {
        ...state
      };
  }
};

export default citiesReducer;
