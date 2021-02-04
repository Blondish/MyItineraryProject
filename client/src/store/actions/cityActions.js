
export const fetchCities = () => dispatch => {
  dispatch({ type: "LOADING_CITIES" });
  fetch("/cities")
    .then(res => res.json())
    .then(result => {
      dispatch({
        type: "FETCH_CITIES",
        payload: result,
      })

    })
    .catch(error => {
      this.setState({
        isLoaded: true,
        error
      });
    });
};
