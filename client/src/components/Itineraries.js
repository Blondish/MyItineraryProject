import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchItineraries } from "../store/actions/itineraryActions";
import { Link } from "react-router-dom";

class itineraries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false
      //filter: ""
    };
  }

  componentDidMount() {
    this.props.fetchItineraries(this.props.match.params.id);
  }

  render() {
    const { itineraries } = this.props.itineraries;
    const cityname = this.props.match.params.cityname;

    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (itineraries.length === 0) {
      return <div>No Itineraries available for this City</div>;
    } else {
      return (
        <div>
          <h1> {cityname}</h1>
          {itineraries.map(itinerary => (
            <div key={itinerary._id} className="citiesfetch">
              {itinerary.title} - {itinerary.username}
            </div>
          ))}
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
