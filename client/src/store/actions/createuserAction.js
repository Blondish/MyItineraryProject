export const createNewUser = data => dispatch => {
  fetch("/auth/users", {
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
        payload: result
      });
    })
    .catch(error => {
      console.log(error);
    });
};
