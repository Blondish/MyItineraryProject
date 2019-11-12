import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LocationCitySharpIcon from "@material-ui/icons/LocationCitySharp";
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 170
  },
  fullList: {
    width: "auto"
  }
});

export default function TemporaryDrawer(props) {
  console.log(props);
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List className="drawerliststyle">
        {[
          <Link to="/">
            <HomeIcon className="iconstyle"></HomeIcon> Home
          </Link>,
          <Link to="/Favourites">
            <AccountCircleIcon className="iconstyle"></AccountCircleIcon>MyFaves
          </Link>,
          <Link to="/CitiesPage">
            <LocationCitySharpIcon className="iconstyle"></LocationCitySharpIcon>
            Cities
          </Link>
        ].map((text, index) => (
          <ListItem button key={index}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <div>
      <MenuIcon
        fontSize="large"
        onClick={toggleDrawer("right", true)}
      ></MenuIcon>

      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {sideList("right")}
      </Drawer>
    </div>
  );
}
