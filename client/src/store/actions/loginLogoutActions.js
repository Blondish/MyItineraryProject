export const loginUser = data => dispatch => {
  fetch("/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(result => {
      dispatch({
        type: "LOG_IN_USER",
        payload: result
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const logoutUser = () => dispatch => {
  dispatch({
    type: "LOGOUT_USER"
  });
};
