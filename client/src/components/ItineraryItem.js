import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CardActions from "@material-ui/core/CardActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import ActivitiesComp from "../components/ActivitiesComp";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },

  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
}));

function ItineraryItem(props) {
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = e => {
    console.log(e.target.id);
    props.changeSelectedItinerary(e.target.id);
  };

  console.log(props);

  return (
    <div>
      <div>
        <div className="itinerariesfetch">
          <Card>
            <CardContent>
              <div>
                <h3>{props.itinerary.title}</h3>
                <div>
                  {props.itinerary.profilepic} - {props.itinerary.username}
                </div>
                {props.itinerary.rating}
                {props.itinerary.duration} - {props.itinerary.price}
                <div>{props.itinerary.hashtags}</div>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]:
                        props.selectedItinerary === props.itinerary._id
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={
                      props.selectedItinerary === props.itinerary._id
                    }
                    aria-label="show more"
                  >
                    <ExpandMoreIcon
                      className="expandicon"
                      id={props.itinerary._id}
                    />
                  </IconButton>
                </CardActions>
                <Collapse
                  in={props.selectedItinerary === props.itinerary._id}
                  timeout="auto"
                  unmountOnExit
                >
                  <CardContent>
                    <ActivitiesComp
                      itinId={props.itinerary._id}
                    ></ActivitiesComp>
                  </CardContent>
                </Collapse>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ItineraryItem;
