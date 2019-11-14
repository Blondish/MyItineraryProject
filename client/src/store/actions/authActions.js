import { returnErrors } from "./errorActions";
//check token and load user

export const loadUser = () => dispatch => {
  console.log("loaduser");
  fetch("/auth/user", {
    method: "GET",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      "x-auth-token": localStorage.getItem("token")
    }
  })
    .then(res => res.json())
    .then(result => {
      console.log(result);
      dispatch({
        type: "USER_LOADED",
        payload: result
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: "AUTH_ERROR"
      });
    });
};
