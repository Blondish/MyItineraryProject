const initState = {
  favourites: []
};

const favouritesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_FAVOURITES":
      return {
        ...state,
        favourites: action.payload
      };

    default:
      return {
        ...state
      };
  }
};
console.log(initState);
export default favouritesReducer;
