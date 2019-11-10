const initState = {
  comments: []
};

const commentReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_COMMENTS":
      return {
        ...state,
        comments: action.payload
      };

    default:
      return {
        ...state
      };
  }
};

export default commentReducer;
