export const fetchCities = () => dispatch => {
  fetch("/cities")
    .then(res => res.json())
    .then(result => {
      dispatch({
        type: "FETCH_CITIES",
        payload: result
      });
    })
    .catch(error => {
      this.setState({
        isLoaded: true,
        error
      });
    });
};
