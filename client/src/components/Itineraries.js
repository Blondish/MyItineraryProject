import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchItineraries } from "../store/actions/itineraryActions";

class itineraries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false
      //itineraries: []
      //filter: ""
    };
  }

  componentDidMount() {
    this.props.fetchItineraries(this.props.match.params.id);
  }

  render() {
    console.log(this.props);
    const { itineraries } = this.props.itineraries;
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (itineraries.length === 0) {
      return <div>No Itineraries available for thid City</div>;
    } else {
      return (
        <div>
          <ul>
            {itineraries.map(itinerary => (
              <li key={itinerary._cityid}> {itinerary.title}</li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  itineraries: state.itineraries
});

export default connect(
  mapStateToProps,
  { fetchItineraries }
)(itineraries);
