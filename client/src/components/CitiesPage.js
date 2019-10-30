import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCities } from "../store/actions/cityActions";
import { Link } from "react-router-dom";

class CitiesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      cities: [],
      filter: ""
    };
  }

  handleChange = e => {
    this.setState({
      filter: e.target.value
    });
  };

  componentDidMount() {
    this.props.fetchCities();
  }

  render() {
    const { cities } = this.props.cities;
    const { error, isLoaded } = this.state;
    let filteredArray = cities.filter(city => {
      let cityName = city.name.toLowerCase();
      return cityName.startsWith(this.state.filter) !== false;
    });

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (filteredArray.length === 0) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <form>
            <input
              type="text"
              value={this.state.filter}
              onChange={this.handleChange}
            ></input>
          </form>

          {filteredArray.map(city => (
            <div key={city._id} className="citiesfetch">
              <Link to={"/Itineraries/" + city._id + "/" + city.name}>
                {" "}
                {city.name} - {city.country}
              </Link>
            </div>
          ))}
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  cities: state.cities
});

export default connect(
  mapStateToProps,
  { fetchCities }
)(CitiesPage);
