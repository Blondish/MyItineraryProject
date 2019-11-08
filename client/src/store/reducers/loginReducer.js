const initState = {
  token: null,
  user: {}
};

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOG_IN_USER":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token
      };

    default:
      return {
        ...state
      };
  }
};

export default loginReducer;
