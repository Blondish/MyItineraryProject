import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCities } from "../store/actions/cityActions";
import { setLoading, stopLoading } from "../store/actions/loadingActions"
import { Link } from "react-router-dom";
import CityCard from "../components/CityCard"

class CitiesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
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

    const { cities } = this.props.cities;
    const { error, isLoaded } = this.state;
    let filteredArray = cities.filter(city => {
      let cityName = city.name.toLowerCase();
      return cityName.startsWith(this.state.filter) !== false;
    });

    if (error) {
      return <div>Error: {error.message}</div>;
    }
    else if (isLoaded) {
      return <div>Loading...</div>;
    }
    else if (filteredArray.length === 0 && isLoaded === false) {
      return <div>No results for your search</div>;
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
                <Link to={"/Itineraries/" + city._id + "/" + city.name} style={{ textDecoration: "none", paddingBottom: "20px" }} cityImage={city.cityImage}>
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
  { fetchCities, setLoading, stopLoading }
)(CitiesPage);
