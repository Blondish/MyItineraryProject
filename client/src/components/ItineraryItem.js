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
import Comments from "../components/Comments";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  root: {
    flexGrow: 1
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

  const handleExpandClick = itinId => {
    if (itinId === props.selectedItinerary) {
      props.changeSelectedItinerary("");
    } else {
      props.changeSelectedItinerary(itinId);
    }
  };

  return (
    <div>
      <div>
        <div className="itinerariesfetch">
          <Card>
            <CardContent>
              <div>
                <Grid className={classes.root} container spacing={3}>
                  <Grid item xs={3} className="profileinfo">
                    <img src={props.itinerary.profilepic} />
                    {props.itinerary.username}
                  </Grid>
                  <Grid item xs={9} className="otherinfo">
                    <h3>{props.itinerary.title}</h3>
                    {props.itinerary.rating}
                    {props.itinerary.duration} - {props.itinerary.price}
                    <div>{props.itinerary.hashtags}</div>
                  </Grid>
                </Grid>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton
                    className="expandicon"
                    className={clsx(classes.expand, {
                      [classes.expandOpen]:
                        props.selectedItinerary === props.itinerary._id
                    })}
                    onClick={() => handleExpandClick(props.itinerary._id)}
                    aria-expanded={
                      props.selectedItinerary === props.itinerary._id
                    }
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse
                  in={props.selectedItinerary === props.itinerary._id}
                  timeout="auto"
                  unmountOnExit
                >
                  <CardContent>
                    <h3>Activities</h3>
                    <ActivitiesComp
                      itinId={props.itinerary._id}
                    ></ActivitiesComp>
                    <h3>Comments</h3>
                    <Comments itinId={props.itinerary._id}></Comments>
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
