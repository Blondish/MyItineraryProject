export const fetchItineraries = cityId => dispatch => {
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
