import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFavourites } from "../store/actions/favouritesActions";
import ItineraryItem from "../components/ItineraryItem";

class Favourites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      selectedItinerary: ""
    };
  }

  componentDidMount() {
    this.props.fetchFavourites(this.props);
  }
  changeSelectedItinerary = itinId => {
    this.setState({ selectedItinerary: itinId });
  };

  render() {
    const token = localStorage.token;
    const { favourites, user } = this.props;

    console.log(favourites);
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!token && !user) {
      return <div>Please log in to see the favourites</div>;
    } else if (token && favourites.length === 0) {
      return <div>You do not have any favourites</div>;
    } else {
      return (
        <div>
          <div>
            {favourites.map(favourite => (
              <div key={favourite._id}>
                <ItineraryItem
                  itinerary={favourite}
                  selectedItinerary={this.state.selectedItinerary}
                  changeSelectedItinerary={this.changeSelectedItinerary}
                ></ItineraryItem>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  favourites: state.favourites.favourites,
  user: state.user
});

export default connect(mapStateToProps, { fetchFavourites })(Favourites);
