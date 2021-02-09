export const fetchItineraries = cityId => dispatch => {
  dispatch({type: "LOADING_ITINERARIES"})
  fetch("/itineraries/" + cityId)
    .then(res => res.json())
    .then(result => {
      dispatch({
        type: "FETCH_ITINERARIES",
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
