import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchItineraries } from "../store/actions/itineraryActions";
import ItineraryItem from "../components/ItineraryItem";
import { Link } from "react-router-dom";

class itineraries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      selectedItinerary: ""
    };
  }

  componentDidMount() {
    this.props.fetchItineraries(this.props.match.params.id);
  }

  changeSelectedItinerary = itinId => {
    this.setState({ selectedItinerary: itinId });
  };

  render() {
    const { itineraries } = this.props.itineraries;
    const cityname = this.props.match.params.cityname;

    const { error } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (itineraries.length === 0) {
      return <div>No Itineraries available for this City</div>;
    } else {
      return (
        <div>
          <h1 className="cityname"> {cityname}</h1>
          {itineraries.map(itinerary => (
            <div key={itinerary._id}>
              <ItineraryItem
                itinerary={itinerary}
                selectedItinerary={this.state.selectedItinerary}
                changeSelectedItinerary={this.changeSelectedItinerary}
              ></ItineraryItem>
            </div>
          ))}
          <Link to="/CitiesPage">
            <p className="chooseanothercity">Choose another city</p>
          </Link>
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
