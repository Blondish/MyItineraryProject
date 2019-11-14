import React from "react";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import LogOutComp from "../components/LogOutComp";

export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  if (props.user) {
    return (
      <div>
        <ChildCareIcon
          className="iconstyle"
          fontSize="large"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        ></ChildCareIcon>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem className="drawerliststyle" onClick={handleClose}>
            <Link to="/Favourites">MyFaves</Link>
          </MenuItem>
          <MenuItem className="drawerliststyle" onClick={handleClose}>
            <LogOutComp></LogOutComp>
          </MenuItem>
        </Menu>
      </div>
    );
  } else {
    return (
      <div>
        <AccountCircleIcon
          className="iconstyle"
          fontSize="large"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        ></AccountCircleIcon>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem className="drawerliststyle" onClick={handleClose}>
            <Link to="/CreateAccountPage">Create Account</Link>
          </MenuItem>
          <MenuItem className="drawerliststyle" onClick={handleClose}>
            <Link to="/LogInPage"> Log In </Link>
          </MenuItem>
        </Menu>
      </div>
    );
  }
}
