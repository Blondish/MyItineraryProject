import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchActivities } from "../store/actions/activityActions";

class ActivitiesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false

      //filter: ""
    };
  }

  componentDidMount() {
    this.props.fetchActivities(this.props.match.params.id);
  }

  render() {
    console.log(this.props);
    const { activities } = this.props.activities;
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (activities.length === 0) {
      return <div>No Activities available for thid City</div>;
    } else {
      return (
        <div>
          {activities.map(activity => (
            <div key={activity._id} className="citiesfetch">
              {" "}
              {activity.name} - {activity.address}
            </div>
          ))}
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
)(ActivitiesPage);
