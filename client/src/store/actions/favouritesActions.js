export const fetchFavourites = () => dispatch => {
  fetch("/users/favourites/", {
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
        type: "FETCH_FAVOURITES",
        payload: result
      });
    })

    .catch(error => {
      // this.setState({
      //   isLoaded: true,
      //   error
      // });
    });
};
