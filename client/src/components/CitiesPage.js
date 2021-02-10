import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCities } from "../store/actions/cityActions";
import { Link } from "react-router-dom";
import CityCard from "../components/CityCard"
import Spinner from "../components/Spinner"

class CitiesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      filter: ""
    };
  }

  handleChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  componentDidMount() {
    this.props.fetchCities()
  }



  render() {

    const { cities, isLoaded } = this.props.cities;
    const { error } = this.state;
    console.log(this.props)
    let filteredArray = cities.filter(city => {
      let cityName = city.name.toLowerCase();
      return cityName.startsWith(this.state.filter) !== false;
    });

    if (error) {
      return <div>Error: {error.message}</div>;
    }
    else if (isLoaded) {
      return <div><Spinner /></div>;
    }
    else if (filteredArray.length === 0) {
      return (
        <div className="container">
          <h2 className="search">Search for City</h2>
          <form>
            <input
              type="text"
              value={this.state.filter}
              onChange={this.handleChange}
            ></input>
          </form>
          <h3>No Matches to your Search...</h3>
        </div>
      )
    }
    else {
      return (
        <div className="container">
          <h2 className="search">Search for City</h2>
          <form>
            <input
              type="text"
              value={this.state.filter}
              onChange={this.handleChange}
            ></input>
          </form>
          <div className="citiesholder">

            {filteredArray.map(city => (
              <div key={city._id}>
                <Link to={{
                  pathname: "/Itineraries/" + city._id + "/" + city.name,
                  state: city.cityImage
                }}
                  style={{ textDecoration: "none", paddingBottom: "20px" }}>
                  <CityCard city={city}></CityCard>
                </Link>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  cities: state.cities,

});

export default connect(
  mapStateToProps,
  { fetchCities }
)(CitiesPage);
