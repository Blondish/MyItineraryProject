import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchComments } from "../store/actions/commentActions";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false
    };
  }

  componentDidMount() {
    this.props.fetchComments(this.props.itinId);
  }

  render() {
    const { comments } = this.props.comments;
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (comments.length === 0) {
      return <div>Noone added any comments</div>;
    } else {
      return (
        <div>
          <div>
            {comments.map(comment => (
              <div key={comment._id}>{comment.comment}</div>
            ))}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  comments: state.comments
});

export default connect(
  mapStateToProps,
  { fetchComments }
)(Comments);
