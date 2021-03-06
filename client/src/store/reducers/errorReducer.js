const initState = {
  msg: {},
  status: null,
  id: null
};

export default function(state = initState, action) {
  switch (action.type) {
    case "GET_ERRORS":
      return {
        ...state,
        msg: action.payload,
        status: action.payload.status,
        id: action.payload.id
      };
    case "CLEAR_ERRORS":
      return {
        ...state,
        msg: {},
        status: null,
        id: null
      };
    default:
      return state;
  }
}
