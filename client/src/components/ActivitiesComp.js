import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchActivities } from "../store/actions/activityActions";
import Slider from "react-slick";

class ActivitiesComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false

      //filter: ""
    };
  }

  componentDidMount() {
    this.props.fetchActivities(this.props.itinId);
  }

  render() {
    // SLIDER Settings
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const { activities } = this.props.activities;
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (activities.length === 0) {
      return <div>No Activities display available</div>;
    } else {
      return (
        <div>
          <Slider {...settings}>
            {activities.map(activity => (
              <div key={activity._id} className="activitiesslider">
                {activity.name} - {activity.address}
              </div>
            ))}
          </Slider>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  activities: state.activities
});

export default connect(
  mapStateToProps,
  { fetchActivities }
)(ActivitiesComp);
