export const fetchComments = itinId => dispatch => {
  fetch("/comments/" + itinId)
    .then(res => res.json())
    .then(result => {
      dispatch({
        type: "FETCH_COMMENTS",
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
