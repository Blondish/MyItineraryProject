const initState = {
  token: null,
  isAuthentificated: null,
  user: null
};
export default function(state = initState, action) {
  switch (action.type) {
    //to see if there is a user with valid token

    case "AUTH_ERROR":
    case "LOGIN_FAIL":
    case "REGISTER_FAIL":
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthentificated: false
      };
    default:
      return state;
  }
}
