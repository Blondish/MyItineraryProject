import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFavourites } from "../store/actions/favouritesActions";
import ItineraryItem from "../components/ItineraryItem";

class Favourites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false
    };
  }

  componentDidMount() {
    this.props.fetchFavourites(this.props);
  }

  render() {
    console.log(this.props.favourites);
    const token = localStorage.token;
    const { favourites } = this.props.favourites;
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!token) {
      return <div>Please log in to see the favourites</div>;
    } else if (token && favourites.length === 0) {
      return <div>You do not have any favourites</div>;
    } else {
      return (
        <div>
          <div>
            {/* {favourites.map(favourite => (
              <div key={favourite._id}>
                <div>{favourite._id}</div>
                <ItineraryItem favourite={favourite._id}></ItineraryItem>
              </div>
            ))} */}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  favourites: state.favourites
});

export default connect(mapStateToProps, { fetchFavourites })(Favourites);
