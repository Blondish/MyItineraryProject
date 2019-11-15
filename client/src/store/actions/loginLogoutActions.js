import returnErrors from "../reducers/errorReducer";

export const loginUser = data => dispatch => {
  fetch("/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      return res.json();
    })
    .then(result => {
      console.log("before");
      if (result.message || result.errors) {
        if (result.message) {
          console.log(result.message);
          dispatch({
            type: "GET_ERRORS"
            // payload: result
          });
        } else {
          dispatch({
            type: "GET_ERRORS",
            payload: result.errors
          });
          console.log(result.errors);
        }
        // dispatch(returnErrors(result.errors[0].msg, err.response.status));
        dispatch({
          type: "AUTH_ERROR"
        });
      } else {
        dispatch({
          type: "LOG_IN_USER",
          payload: result
        });
      }
    })
    .catch(err => {
      console.log("here");
      console.log(err);
    });
};

export const logoutUser = () => dispatch => {
  dispatch({
    type: "LOGOUT_USER"
  });
};
