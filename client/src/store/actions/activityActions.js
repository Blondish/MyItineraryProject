export const fetchActivities = itinId => dispatch => {
  fetch("/activities/" + itinId)
    .then(res => res.json())
    .then(result => {
      dispatch({
        type: "FETCH_ACTIVITIES",
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
