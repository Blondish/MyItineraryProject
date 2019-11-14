const initState = {
  token: null,
  user: null
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
    case "USER_LOADED":
      return {
        ...state,
        user: action.payload
      };

    case "LOGOUT_USER":
      localStorage.removeItem("token");
      return {
        ...state,
        user: null,
        token: null
      };

    default:
      return {
        ...state
      };
  }
};

export default loginReducer;
